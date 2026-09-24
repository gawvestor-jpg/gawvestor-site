import { Link } from 'react-router-dom'
import { NewsletterSignup } from './NewsletterSignup'
import { SOCIAL_ICONS } from './ui/icons'
import { FOOTER, NEWSLETTER, SOCIAL_LINKS } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 px-5 py-8 text-center sm:py-10">
      <div className="mx-auto max-w-md">
        {/* Newsletter: kept intentionally quiet — an extension of the brand,
            not the point of the page. */}
        <section id="newsletter" aria-labelledby="newsletter-heading">
          <h2
            id="newsletter-heading"
            className="font-display text-lg font-medium tracking-tight text-navy-900"
          >
            {NEWSLETTER.heading}
          </h2>
          <p className="mt-1 text-[13px] text-navy-500">{NEWSLETTER.subheading}</p>
          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </section>

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-navy-100 pt-8">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-green-100 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
              >
                {Icon && <Icon className="h-4 w-4" />}
              </a>
            )
          })}
        </div>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
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
