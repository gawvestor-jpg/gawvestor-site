import { useState } from 'react'
import type { ComponentType } from 'react'
import { ContactForm } from './ContactForm'
import { CardBody } from './ui/Card'
import { ChevronDownIcon, MailIcon, BriefcaseIcon } from './ui/icons'
import { CONTACT, HELP_LINKS } from '../config/content'
import type { ContactSource } from '../services/leadCapture'

const HELP_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Contact: MailIcon,
  'Brand Partnerships': BriefcaseIcon,
}

const HELP_SOURCES: Record<string, ContactSource> = {
  Contact: 'contact',
  'Brand Partnerships': 'brand-partnerships',
}

// Deliberately unlike the Community tiles above: white ground instead of green,
// a squarer radius, a left accent rule, and a rounded-square icon plate rather
// than a circle — so the two sections don't read as one long list.
const HELP_CARD_CLASS =
  'group flex w-full min-h-[4.5rem] items-center gap-4 rounded-lg border border-navy-100 border-l-4 border-l-green-600 bg-white px-5 py-4 text-left shadow-subtle transition-all duration-200 ease-out hover:border-navy-200 hover:border-l-green-700 hover:bg-cream-50 hover:shadow-tile focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

const HELP_ICON_CLASS = 'rounded-lg bg-cream-200 text-green-800 group-hover:bg-cream-100'

export function HelpSection() {
  const [openSource, setOpenSource] = useState<ContactSource | null>(null)

  return (
    <section id="contact" className="border-t border-navy-100 bg-white px-5 py-9 sm:py-12">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-xl font-medium tracking-tight text-navy-900 sm:text-2xl">
          Inquiries
        </h2>
        <div className="mt-6 flex flex-col gap-3 sm:mt-7">
          {HELP_LINKS.map((link) => {
            const Icon = HELP_ICONS[link.label]
            const source = HELP_SOURCES[link.label]
            const isOpen = openSource === source
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => setOpenSource((prev) => (prev === source ? null : source))}
                aria-expanded={isOpen}
                className={HELP_CARD_CLASS}
              >
                <CardBody
                  icon={Icon && <Icon className="h-5 w-5" />}
                  iconClassName={HELP_ICON_CLASS}
                  title={link.label}
                  label={link.hook}
                  description={link.description}
                />
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-navy-400 transition-transform duration-200 group-hover:text-green-700 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            )
          })}
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSource ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <p className="mb-4 text-sm text-navy-500">{CONTACT.subheading}</p>
            <ContactForm source={openSource ?? 'contact'} />
          </div>
        </div>
      </div>
    </section>
  )
}
