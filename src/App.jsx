import { useEffect } from 'react'
import G2Topbar from './components/G2Topbar'
import HeroSection from './components/HeroSection'
import CategorySelector from './components/CategorySelector'
import CMSCarousel from './components/CMSCarousel'
import ReviewCallout from './components/ReviewCallout'
import TestimonialSection from './components/TestimonialSection'
import VendorCallout from './components/VendorCallout'
import ImportantCategories from './components/ImportantCategories'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const handler = (e) => {
      if (e.shiftKey && e.key === 'R') {
        window.location.reload()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <G2Topbar />
      <main>
        <HeroSection />
        <CategorySelector />
        <CMSCarousel />
        <ReviewCallout />
        <TestimonialSection />
        <VendorCallout />
        <ImportantCategories />
      </main>
      <Footer />
    </>
  )
}
