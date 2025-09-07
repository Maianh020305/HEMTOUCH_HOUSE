import { HeaderNavigation } from "@/components/header-navigation"
import { BookingHero } from "@/components/booking-hero"
import { RoomDetailsBooking } from "@/components/room-details-booking"
import { CompanyInfo } from "@/components/company-info"
import { CoffeeExperience } from "@/components/coffee-experience"
import { WebsiteFooter } from "@/components/website-footer"
import { CoffeeInfoBanner } from "@/components/coffee-info-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <BookingHero />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <CompanyInfo />
        <CoffeeInfoBanner />
        <RoomDetailsBooking />
        <CoffeeExperience />
      </div>
      <WebsiteFooter />
    </div>
  )
}
