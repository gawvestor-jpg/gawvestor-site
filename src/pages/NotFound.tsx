import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta('Page not found')

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
        <p className="font-display text-6xl font-medium text-green-700">404</p>
        <h1 className="mt-4 font-display text-2xl font-medium tracking-tight text-navy-900">
          Page not found
        </h1>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-500">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full border border-green-700 bg-green-700 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-200 ease-out hover:border-green-800 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
