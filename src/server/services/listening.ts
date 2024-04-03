import { add } from 'date-fns/add'
import { isAfter } from 'date-fns/isAfter'
import * as v from 'valibot'
import { getRedis } from '../cache'

type Scope = 'user-read-playback-state' | 'user-read-currently-playing'

type CreateParams = {
  id: string
  secret: string
  scopes: Scope[]
}

type TokenState = {
  access: string
  expiresAt: Date
}

type SpotifyApi = {
  details: CreateParams
  auth: TokenState
}

const createAPI = async (params: CreateParams): Promise<SpotifyApi> => {
  const authResponse = await getToken(params)

  return {
    details: params,
    auth: {
      access: authResponse.access_token,
      expiresAt: add(new Date(), { seconds: authResponse.expires_in }),
    },
  }
}

const getToken = async (
  params: CreateParams,
): Promise<{ access_token: string; token_type: 'Bearer'; expires_in: number }> => {
  const payload = new URLSearchParams()
  payload.append('grant_type', 'refresh_token')
  payload.append('refresh_token', process.env.SPOTIFY_REFRESH as string)

  const transformed = Buffer.from(`${params.id}:${params.secret}`).toString('base64')

  return await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${transformed}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  }).then((v) => v.json())
}

const refreshCredentials = async (api: SpotifyApi): Promise<SpotifyApi> => {
  const nextApi = await createAPI(api.details)

  globalForSpotify.spotify = nextApi

  return globalForSpotify.spotify
}

const ExternalLinks = v.object({
  spotify: v.string(),
})

const CurrentTrack = v.object({
  item: v.object({
    album: v.object({
      images: v.array(
        v.object({
          url: v.string(),
          height: v.number(),
          width: v.number(),
        }),
      ),
    }),
    name: v.string(),
    artists: v.array(
      v.object({
        name: v.string(),
        external_urls: ExternalLinks,
      }),
    ),
    external_urls: ExternalLinks,
  }),
})

type Image = {
  url: string
  height: number
  width: number
}
export type Track = {
  name: string
  artists: { name: string; url: string }[]
  image?: Image
  link: string
}

const makeRequest = async (api: SpotifyApi) => {
  let currentApi = api

  if (isAfter(new Date(), api.auth.expiresAt)) {
    currentApi = await refreshCredentials(api)
  }

  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${currentApi.auth.access}`,
    },
  })

  if (response.status === 204) {
    return null
  }

  const body = await response.json()

  return v.parse(CurrentTrack, body)
}

const globalForSpotify = global as unknown as { spotify: SpotifyApi }

const getApi = async () => {
  if (globalForSpotify.spotify) {
    return globalForSpotify.spotify
  }

  const api = await createAPI({
    id: process.env.SPOTIFY_CLIENT_ID as string,
    secret: process.env.SPOTIFY_CLIENT_SECRET as string,
    scopes: ['user-read-currently-playing', 'user-read-playback-state'],
  })

  globalForSpotify.spotify = api

  return globalForSpotify.spotify
}

export const getActivity = async () => {
  const api = await getApi()

  const current = await makeRequest(api)

  if (!current) {
    return null
  }

  return {
    name: current.item.name,
    artists: current.item.artists.map((e) => ({ name: e.name, url: e.external_urls.spotify })),
    image: current.item.album.images[0],
    link: current.item.external_urls.spotify,
  } as Track
}
