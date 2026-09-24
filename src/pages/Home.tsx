import { Hero } from '../components/Hero'
import { CommunitySection } from '../components/CommunitySection'
import { HelpSection } from '../components/HelpSection'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  usePageMeta()

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
