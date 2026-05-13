import Hero from "@/components/hero"
import MenuPreview from "@/components/menu-preview"
import ReviewsSection from "@/components/reviews-section"
import LocationSection from "@/components/location-section"
import WelcomePopup from "@/components/welcome-popup"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <ReviewsSection />
      <LocationSection />
      <WelcomePopup />
    </>
  )
}
