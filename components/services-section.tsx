"use client"

import { useState } from "react"
import { DonationModal } from "./donation-modal"

export function ServicesSection() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const services = [
    { label: "SUPPORT THE WORK", title: "Help fund platform development" },
    { label: "PRESERVE LEGACY", title: "Contribute to historical archive projects" },
    { label: "BOOK WATANI", title: "Speaking engagements and collaborations" }
  ]

  return (
    <>
    <section className="w-full mt-12">
      <h2 className="font-retro text-4xl text-black text-center mb-8">Support Our Mission</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service.label}
            onClick={() => setIsDonationModalOpen(true)}
            className="bg-white border-4 border-black rounded-3xl p-6 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all cursor-pointer"
          >
            <p className="text-base font-black text-black mb-4 tracking-wide relative inline-block">
              {service.label}
              <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-black"></span>
            </p>
            <h3 className="font-sans text-base text-black font-medium">{service.title}</h3>
          </button>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="https://maps.google.com/?q=1972+36th+Ave,+Oakland,+CA+94601" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
          Mail Support to Oakland
        </a>
        <p className="text-sm text-black mt-3">1972 36th Ave, Oakland, CA 94601</p>
      </div>
    </section>
    <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  )
}
