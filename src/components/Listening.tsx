import type { Track } from '~/server/services/listening'
import { Activity } from './Activity'
import { createMemo } from 'solid-js'

type Props = Track

const ListeningActivity = (props: Props) => {
  const joinedArtists = createMemo(() => {
    return props.artists.map((e) => e.name).join(',')
  })

  return (
    <Activity icon="i-lucide:music" link={props.link}>
      <span class="truncate">
        {props.name} - {joinedArtists()}
      </span>
    </Activity>
  )
}

export default ListeningActivity
