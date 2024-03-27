import { formatRelative } from 'date-fns/formatRelative'

type Props = {
  title: string
  author: string
  startedAt: string
  completedAt?: string
}

function ReadingActivity(props: Props) {
  return (
    <div class="p-4 bg-[#221c46] gap-2 rounded ">
      <span class="text-sm text-muted-foreground">Currently Reading</span>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <span class="text-sm text-muted-foreground">
        Started {formatRelative(props.startedAt, new Date(), {})}
      </span>
    </div>
  )
}

export default ReadingActivity
