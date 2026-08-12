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
    <div className="flex min-h-screen flex-col bg-white">
      <header className="px-6 py-6">
        <Link
          to="/"
          className="rounded-sm text-sm font-medium text-navy-500 transition-colors hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          ← Back to home
        </Link>
      </header>

      <main className="flex-1 px-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-2xl text-left">
          <h1 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: {LEGAL.lastUpdated}</p>
          <div className="mt-10 space-y-10">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
