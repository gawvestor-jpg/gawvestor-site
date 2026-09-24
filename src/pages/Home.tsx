import { Hero } from '../components/Hero'
import { FeaturedSection } from '../components/FeaturedSection'
import { AboutSection } from '../components/AboutSection'
import { ResourcesSection } from '../components/ResourcesSection'
import { WorkWithSection } from '../components/WorkWithSection'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  usePageMeta()

  return (
    <>
      <main>
        <Hero />
        <FeaturedSection />
        <AboutSection />
        <ResourcesSection />
        <WorkWithSection />
      </main>
      <Footer />
    </>
  )
}
