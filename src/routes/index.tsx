import { Title } from '@solidjs/meta'
import ReadingActivity from '~/components/ReadingActivity'
import { getReadingActivity } from '~/server/queries'

export default function Home() {
  const reading = getReadingActivity()

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
      <div class="space-y-2">
        <h2 class="text-lg font-bold">Activity</h2>
        <div>
          {reading.data ? (
            <ReadingActivity
              title={reading.data.title}
              author={reading.data.author}
              startedAt={reading.data.startedAt}
              completedAt={reading.data.readAt}
            />
          ) : (
            <p>todo</p>
          )}{' '}
        </div>
      </div>
    </main>
  )
}
