import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Extra classes on the wrapper (layout only — motion is handled here). */
  className?: string
  /** Stagger delay in ms, for sibling reveals. Keep ≤ 150. */
  delay?: number
}

// Fade-and-rise once when the element first scrolls into view.
// With prefers-reduced-motion, content renders visible immediately —
// no observer, no transition.
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (reduced || !el) {
      setShown(true)
      return
    }
    // Already on screen (e.g. above the fold) — show without waiting.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay && !shown ? undefined : delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
