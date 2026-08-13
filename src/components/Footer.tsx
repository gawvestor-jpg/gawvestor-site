import { Link } from 'react-router-dom'
import { FOOTER } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 px-5 py-8 text-center sm:py-10">
      <div className="mx-auto max-w-md">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          {FOOTER.links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="inline-flex min-h-11 items-center rounded-sm px-1 text-[13px] tracking-wide text-navy-500 transition-colors duration-200 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-3 text-xs text-navy-500">
          &copy; {year} {FOOTER.copyrightName}. All rights reserved.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-navy-500">
          {FOOTER.disclaimerNote}{' '}
          <Link
            to="/disclaimer"
            className="underline decoration-navy-300 underline-offset-2 transition-colors hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Read the full disclaimer
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
