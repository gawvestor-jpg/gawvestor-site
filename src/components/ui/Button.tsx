import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  onDark?: boolean
}

export function Button({
  variant = 'primary',
  onDark = false,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-subtle'
  const variants = {
    primary: 'bg-navy-900 text-cream-50 shadow-subtle hover:bg-navy-800 hover:shadow-card',
    secondary:
      'border border-navy-900/15 bg-transparent text-navy-900 hover:border-navy-900/25 hover:bg-navy-900/5',
  }
  const ringOffset = onDark ? 'focus-visible:ring-offset-navy-950' : 'focus-visible:ring-offset-cream'

  return <button className={`${base} ${variants[variant]} ${ringOffset} ${className}`} {...props} />
}
