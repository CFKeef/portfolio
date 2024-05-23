import { For, createMemo } from 'solid-js'
import { ArticleDetail } from '~/server/queries'


export const Articles = (props: {items: ArticleDetail[]}) => {
  return (
    <div class="gap-2 w-full flex flex-col">
      <For each={props.items}>{(e) => <Article {...e} />}</For>
    </div>
  )
}

const Article = (props:ArticleDetail) => {
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
        <span class="text-sm text-muted">{new Date().toLocaleDateString()}</span>
      </div>
      <div class="i-lucide:link h-4 w-4" />
    </a>
  )
}
