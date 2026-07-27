import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: undefined
}

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-block rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-subtle'

const variants: Record<Variant, string> = {
  primary:
    'border border-gold-400/50 bg-gold-400/5 text-gold-400 hover:border-gold-400 hover:bg-gold-400/15 hover:text-gold-300',
  secondary:
    'border border-white/15 bg-transparent text-cream-100 hover:border-teal-400 hover:bg-white/5 hover:text-teal-300',
}

export function Button({ variant = 'primary', className = '', href, ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    )
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
}
