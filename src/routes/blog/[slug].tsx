import { Title } from '@solidjs/meta'
import { useParams, type RouteDefinition } from '@solidjs/router'
import { Show, createResource } from 'solid-js'
import { isString } from 'unocss'
import { getArticle } from '~/server/services/blog'

async function fetchArticle(slug: string) {
  'use server'

  const buffer = await getArticle(slug)

  if (isString(buffer)) {
    return buffer
  }

  return null
}

export default function Article() {
  const params = useParams()

  const [article] = createResource(params.slug, fetchArticle, {
    deferStream: true,
  })

  return (
    <main class="space-y-4">
      <Title>Patryck Golebiewski</Title>
      <Show when={article()}>{(data) => <div innerHTML={data()} />}</Show>
    </main>
  )
}
