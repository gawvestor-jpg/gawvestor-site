import { Hero } from '../components/Hero'
import { CommunitySection } from '../components/CommunitySection'
import { HelpSection } from '../components/HelpSection'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <CommunitySection />
        <HelpSection />
        <Footer />
      </main>
    </>
  )
}
