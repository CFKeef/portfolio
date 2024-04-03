type Props = {
  text: string
}

export const Badge = (props: Props) => {
  return (
    <div class="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border-1 border-brand-red bg-brand-red/20 text-brand-red">
      {props.text}
    </div>
  )
}
