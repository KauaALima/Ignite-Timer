import { tv, VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react'

const button = tv({
  base: 'flex items-center gap-2 before:w-2 before:h-2 before:rounded-full',
  variants: {
    color: {
      progress: 'before:bg-yellow-500',
      concluded: 'before:bg-green-500',
      interrupted: 'before:bg-red-500',
    },
  },
})

type TbodyStatusProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    text: string
  }

export function TbodyStatus({ text, color, ...props }: TbodyStatusProps) {
  return (
    <span className={button({ color })} {...props}>
      {text}
    </span>
  )
}
