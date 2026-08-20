/**
 * @author StynerDev
 * @see https://www.styner.dev/
 *
 * The free Kuumba Code program — the teaching work that runs year round,
 * distinct from the paid Birthday Game Lab that follows it.
 *
 * Every claim here comes from kuumbacode.com/apply and /about. Keep it that
 * way: this section describes a 501(c)(3) program, so invented specifics
 * about cost, eligibility, or reach would be a real problem.
 */
import Image from "next/image"

const APPLY_URL = "https://www.kuumbacode.com/apply"

// "The Path" — the four courses, in order, as listed on /apply.
const path = [
  { icon: "✨", name: "Create" },
  { icon: "🌱", name: "Grow" },
  { icon: "💵", name: "Earn" },
  { icon: "🌐", name: "Build" },
]

export function TeachingSection() {
  return (
    <section className="w-full mt-12">
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <p className="inline-block border-2 border-black rounded-full px-4 py-1.5 font-sans font-bold text-[11px] md:text-xs uppercase tracking-wide mb-4 md:mb-6">
          🎓 Free 501(c)(3) Program
        </p>

        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6 max-w-2xl mx-auto">
          Free Cohorts with Kuumba Code
        </h2>

        <div
          className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8"
          style={{ aspectRatio: '3/4' }}
        >
          <Image
            src="/img/kuumba-code-cohorts.jpg"
            alt="Styner Stiner, who teaches the free Kuumba Code cohorts, at her studio workstation"
            width={800}
            height={1200}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="text-black font-sans mb-6 md:mb-8 max-w-2xl mx-auto">
          <blockquote className="text-left border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
              Talent is everywhere. Opportunity is not.
            </p>
          </blockquote>

          <div className="text-left space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            <p>
              Kuumba Code is the free side of my teaching: live, virtual
              courses in AI and digital skills, taught in small cohorts and
              funded by donations rather than tuition.
            </p>
            <p>
              They are open to underserved learners of every age, from children
              in foster-care homes to elders in senior homes, across Nigeria,
              Suriname, and the United States. There are dedicated classes for
              girls. No experience or tech background is needed.
            </p>
          </div>

          <p className="font-sans text-xs font-black tracking-widest uppercase text-black/50 mb-4 text-left">
            The Path
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {path.map((step) => (
              <div
                key={step.name}
                className="flex flex-col items-center gap-2 border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              >
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-black bg-white text-xl md:text-2xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
                >
                  {step.icon}
                </span>
                <span className="font-sans text-sm md:text-base font-bold">
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-xl leading-snug font-bold bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-2xl border-4 border-black shadow-[4px_4px_0px_rgba(218,57,1,1)] md:shadow-[6px_6px_0px_rgba(218,57,1,1)]">
            Cohort tuition is free —<br />
            and it stays free.
          </p>
        </div>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
        >
          Apply to the Next Free Cohort
        </a>

        <p className="font-sans text-xs md:text-sm text-black/60 mt-3">
          The form takes about five minutes.
        </p>
      </div>
    </section>
  )
}
