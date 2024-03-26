import { Title } from '@solidjs/meta'
import { createAsync } from '@solidjs/router'
import { api } from '~/lib/api'

export default function Home() {
  const hello = createAsync(() => api.example.hello.query('world'))
  return (
    <main class="space-y-4">
      <Title>Patryck Golebiewski</Title>
      <div class="gap-2">
        <h1 class="text-xl font-bold">Hi I'm Patryck // Keef</h1>
        <p class="my-2 text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="gap-2">
        <h2 class="text-lg font-bold">Activity</h2>
        <ul>
          <li>
            <p>Currently Listening to: </p>
          </li>
        </ul>
      </div>

      <div class="gap-2">
        <h2 class="text-lg font-bold">Projects</h2>
        <ul>
          <li>
            <p>Currently Listening to: </p>
          </li>
        </ul>
      </div>

      <div class="gap-2">
        <h2 class="text-lg font-bold">Articles</h2>
        <ul>
          <li>
            <p>Currently Listening to: </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
