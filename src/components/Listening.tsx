import { For, Switch, Match } from 'solid-js'
import type { Track } from '~/server/services/listening'

function ListeningActivity(props: Track) {
  return (
    <div class="p-4 bg-[#221c46] gap-2 rounded ">
      <span class="text-sm text-muted-foreground">Listening to</span>
      <h3>{props.name}</h3>
      <For each={props.artists}>{(artist) => <p>{artist.name}</p>}</For>
    </div>
  )
}

export default ListeningActivity
