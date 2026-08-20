/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
"use client"

import { useState } from "react"
import type { ComponentType, SVGProps } from "react"
import Image from "next/image"
import { ExternalLink, Music, Globe, Code, BookOpen, GraduationCap, UserPlus, ShieldCheck, Fingerprint, Gift, Gamepad2, Terminal } from "lucide-react"
import { DonationModal } from "./donation-modal"

// Lucide deprecated its brand icons, so these are inlined.
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.83L1.24 2.25h6.83l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
)

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
)

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  </svg>
)

const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
)

const SpotifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02Zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3Z" />
  </svg>
)

type LinkItem = {
  label: string
  url: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  modal?: "donation"
  note?: string
}

type Section = {
  title: string
  links: LinkItem[]
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  // Centers a section that would otherwise sit alone on the left of the last grid row.
  centered?: boolean
}

const sections: Section[] = [
  {
    title: "Kuumba Code",
    image: "/img/black-handmade-flowers-leaves-floral/Styner_Stiner_Founder.png",
    imageAlt: "Styner Stiner, founder of Kuumba Code",
    links: [
      {
        label: "Kuumba Code — Free AI Education Worldwide",
        url: "https://www.kuumbacode.com/",
        icon: GraduationCap,
        note: "Talent is everywhere. Opportunity is not. A 501(c)(3) program fiscally sponsored by Canticle Farm, serving Nigeria, Suriname & the U.S.",
      },
      {
        label: "Apply to Kuumba Code — Free Enrollment",
        url: "https://www.kuumbacode.com/apply",
        icon: UserPlus,
      },
      {
        label: "Watch Kuumba Code on YouTube",
        url: "https://www.youtube.com/@KuumbaCode",
        icon: YouTubeIcon,
      },
    ],
  },
  {
    title: "Social Media",
    image: "/img/1.Styner_Stiner_Founder.jpg",
    imageAlt: "Styner Stiner",
    links: [
      {
        label: "Follow Me on X",
        url: "https://x.com/StynerDev",
        icon: XIcon,
      },
      {
        label: "Connect on LinkedIn",
        url: "https://www.linkedin.com/in/styner-stiner/",
        icon: ExternalLink,
      },
      {
        label: "Read My Essays on Medium",
        url: "https://medium.com/@stynerdev",
        icon: BookOpen,
      },
      {
        label: "Follow Me on Instagram",
        url: "https://www.instagram.com/kxdutch",
        icon: InstagramIcon,
      },
    ],
  },
  {
    title: "Music",
    image: "/img/2.Styner_Stiner_Founder.jpg",
    imageAlt: "Styner Stiner in a Black Power protest collage",
    links: [
      {
        label: "Spotify — Stream My Music",
        url: "https://open.spotify.com/artist/59S3gst7fwtIvYNMQzyLPX",
        icon: SpotifyIcon,
      },
      {
        label: "Apple Music — Stream My Music",
        url: "https://music.apple.com/us/artist/gunsmoke-beats/6794984574",
        icon: Music,
      },
      {
        label: "SoundCloud — Full Catalog & Sets",
        url: "https://soundcloud.com/gunsmoke-beats/sets",
        icon: Music,
      },
      {
        label: "Gunsmoke Beats — Official Website",
        url: "https://www.gunsmokebeats.com/",
        icon: Music,
      },
      {
        label: "Audiomack — Conscious Hip-Hop & Crunk",
        url: "https://audiomack.com/officialgunsmoke/songs",
        icon: Music,
      },
    ],
  },
  {
    title: "StynerDev",
    image: "/img/3.Styner_Stiner_Founder.jpg",
    imageAlt: "Styner Stiner",
    imageWidth: 799,
    imageHeight: 1000,
    links: [
      {
        label: "Visit My Website",
        url: "https://www.styner.dev/",
        icon: ExternalLink,
      },
      {
        label: "Digital Footprint Hub — OSINT Platform",
        url: "https://digitalfootprinthub.vercel.app/",
        icon: Fingerprint,
      },
      {
        label: "View My GitHub",
        url: "https://github.com/Styner2023",
        icon: GithubIcon,
      },
      {
        label: "View My Hackathon Profile",
        url: "https://dorahacks.io/hacker/StynerDev",
        icon: Code,
      },
      {
        label: "View My Certifications & Badges",
        url: "https://www.credly.com/users/kishana.stiner/badges",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Business",
    links: [
      {
        label: "Birthday Game Lab — Coding Parties for Kids",
        url: "https://www.kuumbacode.com/birthday-game-lab#bgl_games",
        icon: Gamepad2,
      },
      {
        label: "Coding 101 — Python & Game Development Courses",
        url: "https://www.kuumbacode.com/coding-101",
        icon: Terminal,
      },
      {
        label: "BenefitsSafe — Grant Compliance for Nonprofits",
        url: "https://benefitssafe.com/",
        icon: ShieldCheck,
      },
      {
        label: "Suriname OnSite — Trusted Services for Diaspora",
        url: "https://www.surinameonsite.com/",
        icon: Globe,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Support Kuumba Code — Fund a Student's Free Year",
        url: "https://www.kuumbacode.com/give",
        icon: Gift,
        note: "Tax-deductible through our 501(c)(3) fiscal sponsor, Canticle Farm.",
      },
      {
        label: "Support The Work",
        url: "#",
        icon: ExternalLink,
        modal: "donation"
      },
      {
        label: "Buy Me Tea",
        url: "https://www.paypal.com/ncp/payment/ZQ2WSTVYPMCRC",
        icon: ExternalLink,
      },
      {
        label: "Hire Me for Your Project",
        url: "https://www.styner.dev/contact",
        icon: Code,
      },
    ],
  },
  {
    title: "Send Gifts",
    centered: true,
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
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <>
    <h2 className="font-retro text-4xl text-black text-center mb-8 px-6 mt-12">Connect & Support</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 mt-6 w-full">
      {sections.map((section) => (
        <div
          key={section.title}
          className={`flex flex-col gap-3 bg-white border-4 border-black rounded-3xl p-4 transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 ${
            section.centered ? "lg:col-span-2 lg:justify-self-center lg:w-[calc(50%-0.75rem)]" : ""
          }`}
        >
          <h2 className={`font-sans text-lg text-black tracking-wide font-bold ${section.centered ? "text-center" : ""}`}>
            {section.title}
          </h2>
          {section.image && (
            <Image
              src={section.image}
              alt={section.imageAlt ?? section.title}
              width={section.imageWidth ?? 1000}
              height={section.imageHeight ?? 1000}
              className="w-full aspect-square object-cover object-top rounded-2xl border-2 border-black"
            />
          )}
          <div className="flex flex-col gap-3">
            {section.links.map((linkItem) => (
              <div key={linkItem.label}>
                {linkItem.note && (
                  <p className="text-xs text-black mb-2 text-center">{linkItem.note}</p>
                )}
                {linkItem.modal ? (
                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="group flex items-center gap-3 w-full bg-black text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 font-sans font-bold text-xs sm:text-sm transition-all hover:bg-[#DA3901] hover:text-white shadow-[4px_4px_0px_rgba(217,253,80,1)] hover:shadow-[6px_6px_0px_rgba(217,253,80,1)] hover:-translate-y-1"
                  >
                    {linkItem.icon && <linkItem.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                    <span className="flex-1 text-center leading-tight wrap-break-word">{linkItem.label}</span>
                  </button>
                ) : (
                  <a
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 w-full bg-black text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 font-sans font-bold text-xs sm:text-sm transition-all hover:bg-[#DA3901] hover:text-white shadow-[4px_4px_0px_rgba(217,253,80,1)] hover:shadow-[6px_6px_0px_rgba(217,253,80,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_rgba(217,253,80,1)]"
                  >
                    {linkItem.icon && <linkItem.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                    <span className="flex-1 text-center leading-tight wrap-break-word">{linkItem.label}</span>
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  )
}
