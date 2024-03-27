export type NavItem = {
  url: string
  title: string
}

export type Reading = {
  title: string
  author: string
  startedAt: string
  completedAt?: string
}

export type Listening = {
  isLive: boolean
  title: string
  author: string
}

export type Activity = Reading | Listening
