import { middleware$, query$ } from '@solid-mediakit/prpc'
import { scrapeReadingActivity } from './services/reading'
import { SpotifyApi } from '@spotify/web-api-ts-sdk'

const withSpotify = middleware$(async () => {
  const api = SpotifyApi.withClientCredentials(
    process.env.SPOTIFY_CLIENT_ID as string,
    process.env.SPOTIFY_CLIENT_SECRET as string,
    ['user-read-currently-playing'],
  )

  return {
    spotify: api as SpotifyApi,
  }
})

export const getReadingActivity = query$({
  queryFn: async ({ ctx$ }) => {
    return await scrapeReadingActivity(process.env.READER_RSS as string)
  },
  key: 'reading',
})

export const getListeningActivity = query$({
  queryFn: async ({ ctx$ }) => {
    const test = await ctx$.spotify.makeRequest(
      'GET',
      'https://api.spotify.com/v1/me/player/currently-playing',
    )

    console.log('test', test)

    return ''
  },
  middleware: [withSpotify],
  key: 'listening',
})
