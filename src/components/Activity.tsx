import type { ParentProps } from 'solid-js'

type Icon = 'i-lucide:book' | 'i-lucide:music'

type Props = {
  link: string
  icon: Icon
}

export const Activity = (props: ParentProps<Props>) => {
  return (
    <a
      class="p-4 bg-foreground grid grid-cols-[min-content_1fr_min-content] items-center grid-rows-1 gap-2 w-full rounded hover:bg-brand-red/70"
      href={props.link}
    >
      <div class={`${props.icon} h-4 w-4`} />
      {props.children}
      <div class="i-lucide:link h-4 w-4" />
    </a>
  )
}
