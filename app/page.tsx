/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
import { HeroSection } from "@/components/hero-section"
import { RevolutionarySection } from "@/components/revolutionary-section"
import { PartnerSection } from "@/components/partner-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LinkButtons } from "@/components/link-buttons"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden" style={{ backgroundImage: "url('https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/images/3.sumiyoshi-taisha-grand-shrine-2026-01-09-06-37-33-utc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <main className="relative bg-white border-4 border-black w-full max-w-[600px] overflow-hidden flex flex-col items-center py-10 px-6 rounded-3xl shadow-[12px_12px_0px_rgba(0,0,0,1)]">
        <HeroSection />
        <RevolutionarySection />
        <PartnerSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <LinkButtons />
        <FooterSection />
      </main>
    </div>
  )
}
