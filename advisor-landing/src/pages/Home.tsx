import { Hero } from '../components/Hero'
import { LinkHub } from '../components/LinkHub'
import { TrustSection } from '../components/TrustSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <main>
      <Hero />
      <LinkHub />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
