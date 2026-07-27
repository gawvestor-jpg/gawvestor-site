import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { LEGAL } from '../config/content'

type LegalLayoutProps = {
  title: string
  children: ReactNode
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-navy-950">
      <div
        role="alert"
        className="border-b border-amber-400/30 bg-amber-500/10 px-6 py-3 text-center text-xs font-medium leading-relaxed text-amber-200"
      >
        {LEGAL.reviewBanner}
      </div>

      <header className="px-6 py-6">
        <Link
          to="/"
          className="rounded-sm text-sm font-medium text-navy-300 transition-colors hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          ← Back to home
        </Link>
      </header>

      <main className="flex-1 px-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-2xl text-left">
          <h1 className="font-display text-3xl font-medium text-cream-50 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-navy-300">Last updated: {LEGAL.lastUpdated}</p>
          <div className="mt-10 space-y-10">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
