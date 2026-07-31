import { Link } from 'react-router-dom'
import { NewsletterSignup } from './NewsletterSignup'
import { FadeIn } from './ui/FadeIn'
import { FOOTER, NEWSLETTER } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 px-5 py-6 text-center">
      <FadeIn>
        <div id="newsletter" className="mx-auto max-w-md">
          <h2 className="font-display text-lg font-medium text-navy-900">{NEWSLETTER.heading}</h2>
          <p className="mt-1 text-xs text-navy-500">{NEWSLETTER.subheading}</p>
          <div className="mt-3 text-left">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-md border-t border-navy-100 pt-5">
          <p className="font-sans text-sm text-navy-800">
            <a
              href={`mailto:${FOOTER.email}`}
              className="rounded-sm transition-colors duration-200 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {FOOTER.email}
            </a>
          </p>
          <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-sm text-xs tracking-wide text-navy-500 transition-colors duration-200 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 text-xs text-navy-500">
            &copy; {year} {FOOTER.copyrightName}. All rights reserved.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-navy-500">
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
      </FadeIn>
    </footer>
  )
}
