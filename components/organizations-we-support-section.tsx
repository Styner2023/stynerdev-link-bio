/**
 * @author StynerDev
 * @see https://www.styner.dev/
 *
 * Organizations We Support — who this work gives back to.
 *
 * Placed after the paid offerings on purpose. The Teaching → Coding 101 →
 * Birthday Game Lab run is money coming in; this is the closing beat that
 * shows where some of it goes, before the page drops into the link list.
 *
 * Same sourcing rule as teaching-section.tsx: every claim about an outside
 * organization comes from that organization's own site. Canticle Farm's
 * description below is quoted from canticlefarmoakland.org (home + /about).
 * Do not embellish it — this is a real nonprofit, and invented specifics
 * about their mission, reach, or finances would be a genuine problem.
 *
 * Built as an array so more organizations can be added without touching
 * the markup.
 */

import Image from "next/image"

type Organization = {
  name: string
  location: string
  image: { src: string; alt: string }
  // Their own tagline, quoted — not a summary written by us.
  tagline: string
  // Why *we* support them. This is our voice, not theirs.
  //
  // The institutional reason is real, but it is not the reason — Anie is.
  // Her story lives here, inside the organization's card, on purpose: the
  // place and the person are one story, and splitting them weakens both.
  //
  // Tone note for anyone editing: this earns its weight from specifics — a
  // laptop, a table, a name. Resist adding adjectives, and resist arguing any
  // point about who helps whom. The photograph and the facts do that work on
  // their own; stating it outright would cheapen both.
  person: {
    name: string
    fullName: string
    role: string
    image: { src: string; alt: string }
    pullQuote: string
    story: string[]
    beat: string
    closing: string
    // Set on its own line. It is the landing of the whole section, and as
    // the tail of a paragraph it was orphaning to “she stays.” alone.
    finalLine: string
  }
  // The formal relationship, kept after the personal one.
  sponsorNote: string
  pillars: { icon: string; name: string; blurb: string }[]
  siteUrl: string
  donateUrl: string
  // Direct PayPal checkout. Must be the ?token= form: their hosted_button_id
  // is only reachable by POST, so a plain link to it hits a security wall.
  // The same page offers Venmo and guest-card checkout. The button stays
  // short, so givingNote below is what tells people they do not need a
  // PayPal account — keep that line if the label ever changes again.
  paypalUrl: string
  // Quoted from their donate page — they prefer checks to dodge PayPal fees.
  givingNote: string
}

const organizations: Organization[] = [
  {
    name: "Canticle Farm",
    location: "Fruitvale District, Oakland, CA",
    image: {
      src: "/img/canticle-farm.jpg",
      alt: "Volunteers of many ages and backgrounds tending flowering garden beds together at Canticle Farm in Oakland",
    },
    tagline:
      "an urban garden, educational center and community of intention, experimenting at the intersections of faith-based, social-justice-based, and Earth-based nonviolent activism",
    person: {
      name: "Aunty Anie",
      fullName: "Anne Symens-Bucher",
      role: "Canticle Farm — Oakland, California",
      image: {
        src: "/img/aunty-anie.jpg",
        alt: "Aunty Anie smiling on a sunlit porch at Canticle Farm in Oakland, holding out the skirt of a floral dress",
      },
      pullQuote:
        "I learned to code on a laptop I could not afford. She bought it.",
      story: [
        "Before there was any of this, there was a laptop I had no way to buy. She bought it. Every site I have built, every system I have designed, and every student I have taught since started on that machine. I did not have a way in. She made one.",
        "She gave me somewhere to live. And she gave me back my father — after his long incarceration, it was her home and her table where we learned how to be family again.",
      ],
      beat: "She has never once kept a tab.",
      closing:
        "She does it without turning away from her own. Her husband and her children still have all of her; she simply keeps making the table bigger. And she does not look past what my father carried, what I carry, or what whole communities are still carrying.",
      finalLine: "She sees it clearly, and she stays.",
    },
    sponsorNote:
      "Canticle Farm is also Kuumba Code’s 501(c)(3) fiscal sponsor. Every free cohort we run sits under their umbrella, and every tax-deductible gift to Kuumba Code is possible because they vouched for us.",
    // The three pillars as Canticle Farm lists them on their homepage.
    pillars: [
      {
        icon: "\u{1F331}",
        name: "Urban Farm",
        blurb:
          "Food security and food sovereignty through organic gardening, permaculture and herbal medicine.",
      },
      {
        icon: "\u{1F3E1}",
        name: "Intentional Community",
        blurb:
          "Intergenerational, interracial, interfaith neighbors living around one shared garden.",
      },
      {
        icon: "\u{1F4DA}",
        name: "Living Classroom",
        blurb:
          "Workshops, retreats and circles, hosting visiting teachers and learners from around the world.",
      },
    ],
    siteUrl: "https://canticlefarmoakland.org/",
    donateUrl: "https://canticlefarmoakland.org/support-us/donate/",
    paypalUrl:
      "https://www.paypal.com/donate?token=YBRdMnQ-ukW3et3nloeIbm4eMHjVIEPWaeu7zP3CrQ5DsuAitavU0Hht6MEndkabGqe4pIXSwY7o4YKt",
    givingNote:
      "Venmo or card works too — no PayPal account needed. Canticle Farm prefers a mailed check when possible, to avoid fees.",
  },
]

export function OrganizationsWeSupportSection() {
  return (
    <section className="w-full mt-12">
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <p className="inline-flex items-center gap-2 border-2 border-black rounded-full px-4 py-1.5 font-sans font-bold text-[11px] md:text-xs uppercase tracking-wide mb-4 md:mb-6">
          🌱 Organizations We Support
        </p>

        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6 max-w-2xl mx-auto">
          Who We Give Back To
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-black/70 max-w-2xl mx-auto mb-8 md:mb-12">
          This work does not stand on its own. These are the people holding it
          up — and they are worth your support too.
        </p>

        {organizations.map((org) => (
          <div key={org.name} className="text-left">
            <div className="border-2 border-black rounded-2xl p-5 md:p-8 shadow-[3px_3px_0px_rgba(218,57,1,1)]">
              <h3 className="font-retro text-xl md:text-2xl lg:text-3xl text-black">
                {org.name}
              </h3>
              <p className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#DA3901] mt-2">
                📍 {org.location}
              </p>

              {/* Landscape banner, so it runs the full width of the card
                  rather than the max-w-md used for portrait section images. */}
              <div className="relative w-full aspect-[1200/549] rounded-2xl border-4 border-black overflow-hidden mt-5 md:mt-6">
                <Image
                  src={org.image.src}
                  alt={org.image.alt}
                  width={1200}
                  height={549}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Their words, marked as a quote so it reads as theirs. */}
              <blockquote className="font-serif italic text-sm md:text-base leading-relaxed border-l-4 border-black pl-4 md:pl-6 mt-5 md:mt-6">
                &ldquo;{org.tagline}.&rdquo;
                <cite className="block not-italic font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-black/50 mt-3">
                  — {org.name}, in their own words
                </cite>
              </blockquote>

              <p className="font-sans text-xs font-black tracking-widest uppercase text-black/50 mt-8 mb-4">
                What They Do
              </p>

              <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
                {org.pillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="flex flex-col items-center text-center gap-2 border-2 border-black rounded-2xl p-4 md:p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-black bg-white text-xl md:text-2xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
                    >
                      {pillar.icon}
                    </span>
                    <span className="font-sans text-sm md:text-base font-bold leading-snug">
                      {pillar.name}
                    </span>
                    <span className="font-sans text-xs md:text-sm leading-snug text-black/70">
                      {pillar.blurb}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-xs font-black tracking-widest uppercase text-black/50 mt-8 mb-4">
                Why I Support Them
              </p>

              {/* Her face goes above the story, not beside it, so it is the
                  first thing read on every screen size. max-w-md per the
                  section convention in CLAUDE.md.

                  The container is square because the source file is square
                  (1200x1200) and already framed to hold her head to her feet.
                  Do not change this ratio without recropping the source —
                  object-cover will silently cut the top and bottom off. */}
              <figure className="mb-6 md:mb-8">
                <div
                  className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src={org.person.image.src}
                    alt={org.person.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Both names on purpose: "Aunty Anie" is what she is called
                    here, the full name is how she should be credited. No title
                    beyond that — Canticle Farm's own site does not publish
                    one, and this file follows the teaching-section.tsx rule. */}
                <figcaption className="text-center mt-4">
                  <span className="block font-retro text-lg md:text-xl text-black">
                    {org.person.name}
                  </span>
                  <span className="block font-sans text-sm md:text-base font-bold text-black/70 mt-1">
                    {org.person.fullName}
                  </span>
                  <span className="block font-sans text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#DA3901] mt-2">
                    {org.person.role}
                  </span>
                </figcaption>
              </figure>

              <blockquote className="font-serif italic text-black text-lg md:text-xl lg:text-2xl leading-snug border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
                {org.person.pullQuote}
              </blockquote>

              <div className="space-y-3 md:space-y-4">
                {org.person.story.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm md:text-base leading-relaxed text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="text-center text-base md:text-lg lg:text-xl font-bold leading-snug py-4 md:py-6">
                {org.person.beat}
              </p>

              <p className="text-sm md:text-base leading-relaxed text-pretty">
                {org.person.closing}
              </p>

              <p className="font-serif italic text-black text-lg md:text-xl lg:text-2xl leading-snug text-center py-6 md:py-8">
                {org.person.finalLine}
              </p>

              <p className="text-xs md:text-sm leading-relaxed text-black/60 border-t-2 border-black/10 pt-5 mt-6">
                {org.sponsorNote}
              </p>

              {/* PayPal first — it is the fewest clicks to actually giving.
                  Their own donate page follows it, since it carries the
                  mailing address, the monthly option and the fee note. */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-10">
                <a
                  href={org.paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                >
                  {/* The mark is navy, so it needs a light chip to stay
                      visible on the black button and on the orange hover. */}
                  <span className="flex items-center justify-center shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white">
                    <Image
                      src="/img/paypal.png"
                      alt=""
                      aria-hidden="true"
                      width={512}
                      height={512}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain"
                    />
                  </span>
                  Support Now
                </a>
                <a
                  href={org.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                >
                  More Ways to Give
                </a>
                <a
                  href={org.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                >
                  Visit {org.name}
                </a>
              </div>

              <p className="font-sans text-xs md:text-sm leading-snug text-black/60 text-center mt-5 max-w-xl mx-auto">
                {org.givingNote}
              </p>
            </div>
          </div>
        ))}

        <p className="font-serif italic text-sm md:text-base leading-relaxed text-center border-t-2 border-black pt-6 mt-8 md:mt-12 max-w-2xl mx-auto">
          If you have ever wondered who holds me up — this is her face.
          Support her the way she supported me.
        </p>
      </div>
    </section>
  )
}
