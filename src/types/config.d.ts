export type NavItem = {
  url: string
  title: string
}

export type ReadingActivity = {
  title: string
  author: string
}

export type ListeningActivity = {
  isLive: boolean
  title: string
  author: string
}

export type Activity = ReadingActivity | ListeningActivity
