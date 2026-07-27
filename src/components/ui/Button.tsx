import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-subtle'
  const variants = {
    primary: 'bg-gold-500 text-navy-950 shadow-subtle hover:bg-gold-400 hover:shadow-card',
    secondary:
      'border border-white/15 bg-transparent text-cream-100 hover:border-teal-400 hover:bg-white/5 hover:text-teal-300',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
