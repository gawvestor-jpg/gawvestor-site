import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ChevronRightIcon } from './icons'

export const CARD_BASE_CLASS =
  'group flex min-h-[4.5rem] items-center gap-4 rounded-2xl px-5 py-4 text-left shadow-tile transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-colors motion-reduce:hover:translate-y-0'

export const CARD_STYLE = {
  card: 'border border-green-200 bg-green-100 hover:border-green-400 hover:bg-green-200/70',
  icon: 'bg-white text-green-700 group-hover:text-green-800',
  title: 'text-navy-900',
  label: 'text-green-700',
  description: 'text-navy-600',
  chevron: 'text-navy-400 group-hover:text-green-600',
}

type CardBodyProps = {
  icon?: ReactNode
  iconClassName?: string
  title: string
  label: string
  description: string
}

// Descriptions are deliberately never clamped: several carry affiliate or
// "not financial advice" disclosures that must stay fully visible on the tile.
export function CardBody({ icon, iconClassName, title, label, description }: CardBodyProps) {
  return (
    <>
      {icon && (
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors ${iconClassName ?? CARD_STYLE.icon}`}
        >
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className={`font-display text-lg font-medium ${CARD_STYLE.title}`}>{title}</span>
          <span className={`text-[13px] font-medium tracking-wide ${CARD_STYLE.label}`}>{label}</span>
        </span>
        <span className={`mt-1 text-sm leading-normal ${CARD_STYLE.description}`}>
          {description}
        </span>
      </span>
    </>
  )
}

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & CardBodyProps

export function Card({ icon, iconClassName, title, label, description, className = '', ...props }: CardProps) {
  return (
    <a className={`${CARD_BASE_CLASS} ${CARD_STYLE.card} ${className}`} {...props}>
      <CardBody icon={icon} iconClassName={iconClassName} title={title} label={label} description={description} />
      <ChevronRightIcon className={`h-5 w-5 shrink-0 transition-colors ${CARD_STYLE.chevron}`} />
    </a>
  )
}
