import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ChevronRightIcon } from './icons'

export const CARD_BASE_CLASS =
  'group flex min-h-[4.5rem] items-center gap-4 rounded-2xl px-5 py-4 text-left shadow-tile transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-colors motion-reduce:hover:translate-y-0'

export const CARD_STYLE = {
  card: 'border border-green-200 bg-green-100 hover:border-green-400 hover:bg-green-200/70',
  icon: 'bg-white text-green-700 group-hover:text-green-800',
  title: 'text-navy-900',
  label: 'text-green-800',
  description: 'text-navy-800',
  chevron: 'text-navy-500 group-hover:text-green-700',
}

// Per-tile accents so the stack reads as distinct cards at a glance. All stay
// inside the sage/mint family; only the icon circle carries a real colour shift.
export const CARD_TONES = {
  mint: {
    card: 'border border-green-200 bg-green-100 hover:border-green-300 hover:bg-green-200',
    icon: 'bg-white text-green-700 group-hover:text-green-800',
  },
  softGreen: {
    card: 'border border-green-200 bg-green-50 hover:border-green-300 hover:bg-green-100',
    icon: 'bg-green-200 text-green-800 group-hover:bg-green-300',
  },
  blue: {
    card: 'border border-green-200 bg-green-100 hover:border-green-400 hover:bg-green-200/70',
    icon: 'bg-sky-100 text-sky-800 group-hover:bg-sky-200',
  },
  warm: {
    card: 'border border-cream-200 bg-green-50 hover:border-green-300 hover:bg-green-100',
    icon: 'bg-cream-200 text-green-800 group-hover:bg-cream-100',
  },
  deepGreen: {
    card: 'border border-green-300 bg-green-200 hover:border-green-400 hover:bg-green-300',
    icon: 'bg-green-700 text-white group-hover:bg-green-800',
  },
} as const

export type CardTone = keyof typeof CARD_TONES

type CardBodyProps = {
  icon?: ReactNode
  iconClassName?: string
  title: string
  label?: string
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
          {label && (
            <span className={`text-[13px] font-medium tracking-wide ${CARD_STYLE.label}`}>{label}</span>
          )}
        </span>
        <span className={`mt-1 text-sm leading-normal ${CARD_STYLE.description}`}>
          {description}
        </span>
      </span>
    </>
  )
}

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  CardBodyProps & {
    tone?: CardTone
  }

export function Card({
  icon,
  iconClassName,
  title,
  label,
  description,
  tone = 'mint',
  className = '',
  ...props
}: CardProps) {
  const { card, icon: iconTone } = CARD_TONES[tone]

  return (
    <a className={`${CARD_BASE_CLASS} ${card} ${className}`} {...props}>
      <CardBody
        icon={icon}
        iconClassName={iconClassName ?? iconTone}
        title={title}
        label={label}
        description={description}
      />
      <ChevronRightIcon className={`h-5 w-5 shrink-0 transition-colors ${CARD_STYLE.chevron}`} />
    </a>
  )
}
