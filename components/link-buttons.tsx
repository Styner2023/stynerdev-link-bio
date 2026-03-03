/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
"use client"

import { useState } from "react"
import { Instagram, Youtube, Twitter, ExternalLink, Music, Globe, Code, Github, BookOpen } from "lucide-react"
import { MusicModal } from "./music-modal"
import { DonationModal } from "./donation-modal"

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.53a8.27 8.27 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.06z" />
  </svg>
)

const AudiomackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 17v-4h2v4H4zm4 2V9h2v10H8zm4 1V5h2v15h-2zm4-1V9h2v10h-2zm4-6v-4h2v4h-2z" />
  </svg>
)

  const sections = [
  {
    title: "Social Media",
    links: [
      {
        label: "Follow Me on Instagram",
        url: "https://www.instagram.com/kxdutch",
        icon: Instagram,
      },
      {
        label: "Follow Me on X",
        url: "https://x.com/StynerDev",
        icon: Twitter,
      },
      {
        label: "Read My Essays on Medium",
        url: "https://medium.com/@stynerdev",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Music",
    links: [
      {
        label: "Dev Music for Coding",
        url: "#",
        icon: Music,
        modal: "music"
      },
      {
        label: "Songs & Lyrics for Sale",
        url: "https://wahalawave.com",
        icon: Music,
      },
      {
        label: "Listen to Conscious Hip-Hop & Crunk",
        url: "https://audiomack.com/officialgunsmoke/songs",
        icon: Music,
      },
    ],
  },
  {
    title: "Business",
    links: [
      {
        label: "Suriname OnSite — Trusted Services for Diaspora",
        url: "https://surinameonsite.com",
        icon: Globe,
      },
    ],
  },
  {
    title: "StynerDev",
    links: [
      {
        label: "Visit My Website",
        url: "https://www.styner.dev/",
        icon: ExternalLink,
      },
      {
        label: "View My GitHub",
        url: "https://github.com/Styner2023",
        icon: Github,
      },
      {
        label: "Hire Me for Your Project",
        url: "https://www.styner.dev/contact",
        icon: Code,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Support The Work",
        url: "#",
        icon: ExternalLink,
        modal: "donation"
      },
      {
        label: "Buy Me Tea",
        url: "https://links.styner.dev/",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Send Gifts",
    links: [
      {
        label: "Mail Gifts to Styner Stiner c/o Canticle Farm",
        url: "https://www.google.com/search?q=canticle+farm",
        icon: ExternalLink,
        note: "Address to: Styner Stiner c/o Canticle Farm, 1972 36th Ave, Oakland, CA 94601"
      },
    ],
  },
]

export function LinkButtons() {
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <>
    <div className="flex flex-col gap-6 px-6 mt-6 w-full">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-3 bg-white border-4 border-black rounded-3xl p-4 transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2">
          <h2 className="font-sans text-lg text-black tracking-wide font-bold">
            {section.title}
          </h2>
          <div className="flex flex-col gap-3">
            {section.links.map((linkItem) => (
              <div key={linkItem.label}>
                {linkItem.modal ? (
                  <button
                    onClick={() => linkItem.modal === "music" ? setIsMusicModalOpen(true) : setIsDonationModalOpen(true)}
                    className="group flex items-center gap-3 w-full bg-black text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 font-sans font-bold text-xs sm:text-sm transition-all hover:bg-[#DA3901] hover:text-white shadow-[4px_4px_0px_rgba(217,253,80,1)] hover:shadow-[6px_6px_0px_rgba(217,253,80,1)] hover:-translate-y-1"
                  >
                    {linkItem.icon && <linkItem.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                    <span className="flex-1 text-center leading-tight break-words">{linkItem.label}</span>
                  </button>
                ) : (
                  <a
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 w-full bg-black text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 font-sans font-bold text-xs sm:text-sm transition-all hover:bg-[#DA3901] hover:text-white shadow-[4px_4px_0px_rgba(217,253,80,1)] hover:shadow-[6px_6px_0px_rgba(217,253,80,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_rgba(217,253,80,1)]"
                  >
                    {linkItem.icon && <linkItem.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                    <span className="flex-1 text-center leading-tight break-words">{linkItem.label}</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
                {linkItem.note && (
                  <p className="text-xs text-black mt-2 text-center">{linkItem.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <MusicModal isOpen={isMusicModalOpen} onClose={() => setIsMusicModalOpen(false)} />
    <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  )
}
