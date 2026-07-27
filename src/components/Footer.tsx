import { Link } from 'react-router-dom'
import { NewsletterSignup } from './NewsletterSignup'
import { FadeIn } from './ui/FadeIn'
import { FOOTER, NEWSLETTER } from '../config/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950 px-6 py-12 text-center">
      <FadeIn>
        <div id="newsletter" className="mx-auto max-w-md">
          <h2 className="font-display text-xl font-medium text-cream-50">{NEWSLETTER.heading}</h2>
          <p className="mt-2 text-sm text-navy-300">{NEWSLETTER.subheading}</p>
          <div className="mt-5 text-left">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-md border-t border-white/10 pt-8">
          <p className="font-sans text-sm text-cream-200">
            <a
              href={`mailto:${FOOTER.email}`}
              className="rounded-sm transition-colors duration-200 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              {FOOTER.email}
            </a>
          </p>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-sm text-xs tracking-wide text-navy-300 transition-colors duration-200 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs text-navy-300">
            &copy; {year} {FOOTER.copyrightName}. All rights reserved.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-navy-300">
            {FOOTER.disclaimerNote}{' '}
            <Link
              to="/disclaimer"
              className="underline decoration-navy-400/50 underline-offset-2 transition-colors hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
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
