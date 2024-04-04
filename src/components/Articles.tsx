import { For, createMemo } from 'solid-js'

type Props = {
  entries: string[]
}

export const Articles = (props: Props) => {
  console.log(props.entries)
  return (
    <div class="gap-2 w-full flex flex-col">
      <For each={props.entries}>{(e) => <Article name={e} />}</For>
    </div>
  )
}

const Article = (props: {
  name: string
}) => {
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
