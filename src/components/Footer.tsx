import { Link } from 'react-router-dom'
import { NewsletterSignup } from './NewsletterSignup'
import { MailIcon } from './ui/icons'
import { FOOTER, NEWSLETTER } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 px-5 py-8 text-center sm:py-10">
      <div className="mx-auto max-w-md">
        <section
          id="newsletter"
          aria-labelledby="newsletter-heading"
          className="rounded-3xl border border-green-200 bg-green-100 p-5 text-left shadow-tile sm:p-6"
        >
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green-700">
              <MailIcon className="h-[18px] w-[18px]" />
            </span>
            <div>
              <h2
                id="newsletter-heading"
                className="font-display text-lg font-medium tracking-tight text-navy-900"
              >
                {NEWSLETTER.heading}
              </h2>
              <p className="mt-0.5 text-[13px] leading-snug text-navy-800">
                {NEWSLETTER.subheading}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </section>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 border-t border-navy-100 pt-5">
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
