import type { AnchorHTMLAttributes, ReactNode } from 'react'

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eyebrow: string
  title: string
  description: string
  icon?: ReactNode
}

export function Card({ eyebrow, title, description, icon, className = '', ...props }: CardProps) {
  return (
    <a
      className={`group flex flex-col items-start gap-3 rounded-sm border border-white/10 bg-navy-900/60 p-6 text-left shadow-subtle transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-navy-800/60 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${className}`}
      {...props}
    >
      {icon && <span className="text-navy-300 group-hover:text-gold-400">{icon}</span>}
      <span className="font-display text-xl font-medium text-cream-50">{eyebrow}</span>
      <span className="text-sm font-medium tracking-wide text-gold-400">{title}</span>
      <span className="text-sm leading-relaxed text-navy-300">{description}</span>
    </a>
  )
}
