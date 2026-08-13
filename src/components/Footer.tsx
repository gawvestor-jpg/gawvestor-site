import { Link } from 'react-router-dom'
import { NewsletterSignup } from './NewsletterSignup'
import { MailIcon } from './ui/icons'
import { FOOTER, NEWSLETTER } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 px-5 py-9 text-center sm:py-12">
      <div>
        <div
          id="newsletter"
          className="mx-auto max-w-md rounded-3xl border border-green-300 bg-gradient-to-br from-green-100 to-green-200/70 p-6 text-left shadow-card"
        >
          <div className="flex justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700 shadow-subtle">
              <MailIcon className="h-4 w-4" />
            </span>
          </div>
          <h2 className="mt-3 text-center font-display text-lg font-medium tracking-tight text-navy-900">
            {NEWSLETTER.heading}
          </h2>
          <div className="mt-2 flex justify-center">
            <span className="rounded-full bg-green-700 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              Free
            </span>
          </div>
          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-md border-t border-navy-100 pt-5">
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
          <p className="mt-4 text-xs text-navy-500">
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
      </div>
    </footer>
  )
}
