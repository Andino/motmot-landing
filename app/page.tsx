import HeroSection from "@/components/hero-section"
import SportsServices from "@/components/sports-services"
import LocationsSection from "@/components/locations-section"
import TourCalendar from "@/components/tour-calendar"
import AcademicLessons from "@/components/academic-lessons"
import TourismExperience from "@/components/tourism-experience"
import Accommodations from "@/components/accommodations"
import LogisticsSection from "@/components/logistics-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SportsServices />
      <LocationsSection />
      <TourCalendar />
      <AcademicLessons />
      <TourismExperience />
      <Accommodations />
      <LogisticsSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
