import { Hero } from '../components/Hero'
import { LinkHub } from '../components/LinkHub'
import { ToolsSection } from '../components/ToolsSection'
import { TrustSection } from '../components/TrustSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <main>
      <Hero />
      <LinkHub />
      <ToolsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
