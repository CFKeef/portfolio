import { Title } from '@solidjs/meta'
import { useParams } from '@solidjs/router'
import { Show, createMemo, createResource } from 'solid-js'
import { getArticle } from '~/server/services/blog'
import { SolidMarkdown } from 'solid-markdown'

async function fetchArticle(slug: string) {
  'use server'
  const fs = await import('fs/promises');

  const test = await fs.readdir("/articles")
  console.log(test)
  const article = await getArticle(slug)

  return article
}

export default function Article() {
  const params = useParams()

  const [article] = createResource(params.slug, fetchArticle, {
    deferStream: true,
  })

  return (
    <main class="space-y-4">
      <Title>Patryck Golebiewski</Title>
      <Show when={article()?.metadata}>
        {(data) => (
          <div>
            <h1 class="text-xl">{data().title}</h1>
            {<span class="text-sm text-muted">{new Date(data().date).toLocaleDateString()}</span>}
          </div>
        )}
      </Show>
      <Show when={article()}>{(data) => <SolidMarkdown>{data().file}</SolidMarkdown>}</Show>
    </main>
  )
}
