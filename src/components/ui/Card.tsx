import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ChevronRightIcon } from './icons'

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode
  title: string
  label: string
  description: string
}

export function Card({ icon, title, label, description, className = '', ...props }: CardProps) {
  return (
    <a
      className={`group flex items-center gap-3 rounded-full border border-navy-100 bg-white px-4 py-3 text-left shadow-subtle transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50/60 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${className}`}
      {...props}
    >
      {icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 transition-colors group-hover:bg-green-100 group-hover:text-green-800">
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2">
          <span className="font-display text-base font-medium text-navy-900">{title}</span>
          <span className="shrink-0 text-xs font-medium tracking-wide text-green-700">{label}</span>
        </span>
        <span className="mt-0.5 block truncate text-xs leading-relaxed text-navy-500">
          {description}
        </span>
      </span>
      <ChevronRightIcon className="h-4 w-4 shrink-0 text-navy-300 transition-colors group-hover:text-green-600" />
    </a>
  )
}
