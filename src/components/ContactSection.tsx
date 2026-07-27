import { ContactForm } from './ContactForm'
import { FadeIn } from './ui/FadeIn'
import { CONTACT } from '../config/content'

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-navy-900/10 bg-cream px-6 py-12 sm:py-section-y">
      <div className="absolute inset-x-0 top-0 flex -translate-y-px justify-center">
        <span className="h-px w-16 bg-gold-400/60" />
      </div>
      <FadeIn className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-medium text-navy-950 sm:text-3xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-navy-600">{CONTACT.subheading}</p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  )
}
