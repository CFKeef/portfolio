import { For, createMemo } from 'solid-js'
import type { Article } from '~/types'

type Props = {
  entries: Article[]
}

export const Articles = (props: Props) => {

  return (
    <div class="gap-2 w-full flex flex-col">
      <For each={props.entries}>{(e) => <Article {...e} />}</For>
    </div>
  )
}

const Article = (props:Article) => {
  const link = createMemo(() => {
    return `/blog/${props.name}`
  })

  return (
    <a
      class="p-4 bg-foreground hover:bg-brand-red/80 w-full inline-flex justify-between items-center rounded capitalize"
      href={link()}
      target="_blank"
      rel={'noreferrer'}
    >
      <div>
        <h3>{props.name}</h3>
        <span class="text-sm text-muted">{new Date(props.createdAt).toLocaleDateString()}</span>
      </div>
      <div class="i-lucide:link h-4 w-4" />
    </a>
  )
}
