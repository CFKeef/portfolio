import { For } from 'solid-js'

type Project = {
  name: string
  description: string
  link: string
}

const projects = [
  {
    name: 'keef.sh',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: 'https://github.com/CFKeef/portfolio/',
  },
]

export const Projects = () => {
  return (
    <div class="grid grid-cols-3 gap-2">
      <For each={projects}>{(e) => <Project {...e} />}</For>
    </div>
  )
}

const Project = (props: Project) => {
  return (
    <a
      href={props.link}
      class="w-full bg-foreground p-2 rounded hover:bg-brand-red/80 space-y-2"
      target="_blank"
      rel="noreferrer"
    >
      <h3>{props.name}</h3>
      <p class="text-sm">{props.description}</p>
    </a>
  )
}
