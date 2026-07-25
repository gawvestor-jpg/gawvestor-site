import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type FadeInProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function FadeIn({ children, className = '', delayMs = 0 }: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
