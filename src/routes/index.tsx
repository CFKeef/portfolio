import { Title } from '@solidjs/meta'
import ReadingActivity from '~/components/Reading'
import { createAsync, type RouteDefinition } from '@solidjs/router'
import {  getListening, getReading } from '~/server/queries'
import { Show } from 'solid-js'
import ListeningActivity from '~/components/Listening'
import { Projects } from '~/components/Projects'


export const route = {
  load: () => {
    Promise.allSettled([getReading(), getListening()])
  },
} satisfies RouteDefinition

export default function Home() {
  const reading = createAsync(() => getReading())
  const listening = createAsync(() => getListening())

  return (
    <main class="space-y-4">
      <Title>Patryck Golebiewski</Title>
      <section class="gap-2">
        <h1 class="text-xl font-bold">Hi I'm Patryck // Keef</h1>
        <p class="my-2 text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </section>
      <section class="space-y-2">
        <h2 class="text-lg font-bold">Activity</h2>
        <Show when={reading()}>{(data) => <ReadingActivity {...data()} />}</Show>
        <Show when={listening()}>{(data) => <ListeningActivity {...data()} />}</Show>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-bold">Projects</h2>
        <Projects />
      </section>
    </main>
  )
}
