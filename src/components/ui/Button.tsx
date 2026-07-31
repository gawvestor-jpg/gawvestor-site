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
  'inline-block rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-subtle'

const variants: Record<Variant, string> = {
  primary: 'border border-green-700 bg-green-700 text-white hover:border-green-800 hover:bg-green-800',
  secondary:
    'border border-green-200 bg-transparent text-green-800 hover:border-green-400 hover:bg-green-50',
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
