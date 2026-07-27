import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { LinkHub } from '../components/LinkHub'
import { ToolsSection } from '../components/ToolsSection'
import { AboutSection } from '../components/AboutSection'
import { TrustSection } from '../components/TrustSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LinkHub />
        <ToolsSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
