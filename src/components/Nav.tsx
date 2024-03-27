import { A } from '@solidjs/router'
import { For } from 'solid-js'

type NavItem = {
  url: string
  title: string
}

const entries: Array<NavItem> = [{ url: '/blog', title: 'blog' }]

function Nav() {
  return (
    <header class="flex w-full flex-row justify-between">
      <A href="/">
        <img src={'/images/chip.svg'} class="h-6 w-6" alt="" />
      </A>
      <div class="gap-4 justify-end flex flex-row">
        <For each={entries}>
          {(f) => (
            <A
              href={f.url}
              class="flex items-center transition-colors hover:text-foreground/80 sm:text-md capitalize text-primary"
            >
              {f.title}
            </A>
          )}
        </For>
      </div>
    </header>
  )
}

export default Nav
