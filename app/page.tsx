/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
import { HeroSection } from "@/components/hero-section"
import { RevolutionarySection } from "@/components/revolutionary-section"
import { PartnerSection } from "@/components/partner-section"
import { ServicesSection } from "@/components/services-section"
import { LiveReadingsSection } from "@/components/live-readings-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CustomBioService } from "@/components/custom-bio-service"
import { LinkButtons } from "@/components/link-buttons"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/images/3.sumiyoshi-taisha-grand-shrine-2026-01-09-06-37-33-utc.jpg')" }}>
      <main className="relative bg-white border-4 border-black w-full max-w-[600px] overflow-hidden flex flex-col items-center py-8 md:py-10 px-4 md:px-6 rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_rgba(0,0,0,1)]">
        <HeroSection />
        <div className="w-full mt-0 pt-0 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <img src="/img/black-handmade-flowers-leaves-floral/24.png" alt="Flower" className="w-14 h-14 md:w-20 md:h-20" />
            <svg className="w-16 md:w-24 h-2 md:h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,6 Q12.5,2 25,6 T50,6 T75,6 T100,6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="10" cy="6" r="1.5" fill="black" />
              <circle cx="30" cy="6" r="1.5" fill="black" />
              <circle cx="50" cy="6" r="1.5" fill="black" />
              <circle cx="70" cy="6" r="1.5" fill="black" />
              <circle cx="90" cy="6" r="1.5" fill="black" />
            </svg>
            <img src="/img/black-handmade-flowers-leaves-floral/24.png" alt="Flower" className="w-14 h-14 md:w-20 md:h-20 scale-x-[-1]" />
          </div>
          <p className="font-retro text-2xl md:text-4xl lg:text-5xl text-black font-bold leading-tight mt-8 md:mt-16 px-2">
            The Revolutionary Who Raised Me
          </p>
        </div>
        <RevolutionarySection />
        <PartnerSection />
        <ServicesSection />
        <LiveReadingsSection />
        <div className="w-full mt-8 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <img src="/img/black-handmade-flowers-leaves-floral/24.png" alt="Flower" className="w-14 h-14 md:w-20 md:h-20" />
            <svg className="w-16 md:w-24 h-2 md:h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,6 Q12.5,2 25,6 T50,6 T75,6 T100,6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="10" cy="6" r="1.5" fill="black" />
              <circle cx="30" cy="6" r="1.5" fill="black" />
              <circle cx="50" cy="6" r="1.5" fill="black" />
              <circle cx="70" cy="6" r="1.5" fill="black" />
              <circle cx="90" cy="6" r="1.5" fill="black" />
            </svg>
            <img src="/img/black-handmade-flowers-leaves-floral/24.png" alt="Flower" className="w-14 h-14 md:w-20 md:h-20 scale-x-[-1]" />
          </div>
          <p className="font-retro text-2xl md:text-4xl lg:text-5xl text-black font-bold leading-tight mt-8 md:mt-16 px-2">
            This foundation shapes everything I build.
          </p>
        </div>
        <TestimonialsSection />
        <PortfolioSection />
        <CustomBioService />
        <LinkButtons />
        <FooterSection />
      </main>
    </div>
  )
}
