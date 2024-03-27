import type { Reading } from '~/types'

function ReadingActivity(props: Reading) {
  return (
    <div class="p-4 bg-[#221c46]   grid grid-cols-[.1fr_auto] gap-2 rounded">
      <div class="flex justify-center items-center">
        <div class="i-lucide:book h-4 w-4 color-brand-red" />{' '}
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <span>{props.startedAt}</span>
      </div>
    </div>
  )
}

export default ReadingActivity
