import { ContactForm } from './ContactForm'
import { FadeIn } from './ui/FadeIn'
import { CONTACT } from '../config/content'

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-navy-100 bg-white px-5 py-6 sm:py-8">
      <div className="absolute inset-x-0 top-0 flex -translate-y-px justify-center">
        <span className="h-px w-16 bg-green-400/60" />
      </div>
      <FadeIn className="mx-auto max-w-md">
        <div className="text-center">
          <h2 className="font-display text-xl font-medium text-navy-900 sm:text-2xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-2 text-sm text-navy-500">{CONTACT.subheading}</p>
        </div>
        <div className="mt-5">
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  )
}
