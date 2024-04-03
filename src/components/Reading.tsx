import type { Book } from '~/server/services/reading'
import { Activity } from './Activity'

type Props = Book

const ReadingActivity = (props: Props) => {
  return (
    <Activity icon="i-lucide:book" link={props.link}>
      <span class="truncate">
        {props.title} - {props.author}
      </span>
    </Activity>
  )
}

export default ReadingActivity
