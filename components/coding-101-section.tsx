/**
 * @author StynerDev
 * @see https://www.styner.dev/
 *
 * Coding 101 — the PAID course, deliberately sat between the free Kuumba Code
 * cohorts and the paid Birthday Game Lab.
 *
 * The page now carries three offerings with two different price models, so
 * every one of them states its own terms outright. Do not soften the "paid"
 * badge here or the "free" framing on the cohort section: a reader who mixes
 * the two up either thinks a donation-funded 501(c)(3) program costs money,
 * or thinks a paid course is free.
 *
 * Pricing, schedule, and session format are NOT stated because they are not
 * documented anywhere yet — the CTA opens a conversation instead. Fill them in
 * here once they exist rather than approximating.
 */
import Image from "next/image"

// The course page is the destination; the form is the action. Both are linked
// because /coding-101 does not itself link the form yet — sending people only
// there would leave them with no way to actually enroll.
const COURSE_URL = "https://www.kuumbacode.com/coding-101"
const ENQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSclBlFN0_1AKYByEbHRGP1J5er2YQfGhHI785nN0UlNO2nvXg/viewform"

// Two SEPARATE paid courses — not one bundle, and not three equal subjects.
// Scratch and MakeCode Arcade are platforms inside game development, so they
// belong under it rather than beside Python. Parents pay per course.
const courses = [
  {
    icon: "🐍",
    name: "Python",
    kind: "Text-based code",
    blurb: "A real programming language, typed from the first line.",
    // Spec floor set deliberately high so a student is never the one who
    // gets stuck — headroom for whatever they decide to build, and a screen
    // big enough to hold an editor and a terminal side by side.
    requirement: {
      headline: "Needs a laptop that can install software",
      specs: ["Windows or macOS", "16 GB RAM", "14\u2033 screen or larger"],
      icon: "💻",
      note: "Tablets and most Chromebooks won\u2019t work.",
    },
    platforms: [{ name: "python.org", url: "https://www.python.org/" }],
  },
  {
    icon: "🎮",
    name: "Game Development",
    kind: "Block-based",
    blurb: "Drag-and-drop game building — design it, test it, play it.",
    requirement: {
      icon: "🌐",
      headline: "Runs in a web browser",
      specs: ["Nothing to install", "Chromebooks fine", "Any modern browser"],
      note: "A school or shared family laptop works for this one.",
    },
    // Point at Styner's own profile and shared arcade, not the platform
    // landing pages — a parent following these lands on real student work.
    platforms: [
      { name: "Scratch", url: "https://scratch.mit.edu/users/StynerDev/" },
      {
        name: "MakeCode Arcade",
        url: "https://arcade.makecode.com/S56622-15254-87265-97643",
      },
    ],
  },
]

export function Coding101Section() {
  return (
    <section className="w-full mt-12">
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <p className="inline-flex items-center gap-2 bg-[#DA3901] text-white rounded-full px-4 py-1.5 font-sans font-black text-[11px] md:text-xs uppercase tracking-wide mb-4 md:mb-6">
          💻 Paid Course
        </p>

        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6 max-w-2xl mx-auto">
          Coding 101
        </h2>

        <div className="text-black font-sans mb-6 md:mb-8 max-w-2xl mx-auto">
          <blockquote className="text-left border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
              Start from zero — blocks or Python.
            </p>
          </blockquote>

          <div
          className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8"
          style={{ aspectRatio: '3/2' }}
        >
          <Image
            src="/img/coding-101-students.jpg"
            alt="Two girls at a laptop with a robotic arm, one reacting with delight"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-left space-y-3 md:space-y-4 mb-6 md:mb-8">
            <p className="text-base md:text-lg leading-relaxed font-semibold">
              Hands-on programming, taught from the ground up — for kids and
              adults, with no experience assumed.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              There are two courses: Python, and game development. Each stands
              on its own — take one, or take both.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              This is the paid side of my teaching. The free Kuumba Code
              cohorts keep running alongside it, covering AI and digital skills
              on donations. Coding 101 is the course you pay for, taught by me.
            </p>
          </div>

          <p className="font-sans text-xs font-black tracking-widest uppercase text-black/50 mb-4 text-left">
            Two Separate Courses
          </p>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            {courses.map((course) => (
              <div
                key={course.name}
                className="flex flex-col items-center text-center gap-2 border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              >
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-white text-2xl md:text-3xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
                >
                  {course.icon}
                </span>
                <span className="font-sans text-base md:text-lg font-bold leading-snug">
                  {course.name}
                </span>
                <span className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#DA3901]">
                  {course.kind}
                </span>
                <span className="font-sans text-xs md:text-sm leading-snug text-black/70">
                  {course.blurb}
                </span>
                {course.requirement && (
                  <span className="block text-left mt-2 pt-3 border-t-2 border-black/10 w-full">
                    <span className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-sm leading-snug">
                        {course.requirement.icon}
                      </span>
                      <span className="font-sans text-xs md:text-sm font-bold leading-snug">
                        {course.requirement.headline}
                      </span>
                    </span>
                    <span className="flex flex-col gap-1.5 mt-3 w-full">
                      {course.requirement.specs.map((spec) => (
                        <span
                          key={spec}
                          className="flex items-center gap-2 font-sans text-xs md:text-sm font-bold leading-snug"
                        >
                          <span
                            aria-hidden="true"
                            className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#DA3901]"
                          />
                          {spec}
                        </span>
                      ))}
                    </span>
                    <span className="block font-sans text-xs md:text-sm leading-snug text-black/70 mt-3">
                      {course.requirement.note}
                    </span>
                  </span>
                )}
                {course.platforms.length > 0 && (
                  <span className="flex flex-wrap justify-center gap-2 mt-1">
                    {course.platforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-2 border-black rounded-full px-3 py-1 font-sans font-bold text-[10px] md:text-[11px] uppercase tracking-wide hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(218,57,1,1)] hover:-translate-y-0.5"
                      >
                        {platform.name}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Parents decide what gets installed on their child's machine and
              what accounts get made in their child's name. Saying so up front
              removes the objection before it becomes a reason not to enroll. */}
          <div className="text-left border-2 border-dashed border-black rounded-2xl p-4 md:p-5 flex items-start gap-4 mb-3 md:mb-4">
            <span
              aria-hidden="true"
              className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-white text-2xl md:text-3xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
            >
              🔐
            </span>
            <div>
              <p className="font-sans text-base md:text-lg font-bold leading-snug mb-1">
                Parents approve the setup
              </p>
              <p className="font-sans text-xs md:text-sm text-black/60 leading-snug">
                Nothing is installed and no account is created without your OK.
                Prefer not to install anything? We can work in the browser
                instead.
              </p>
            </div>
          </div>

          <div className="text-left border-2 border-dashed border-black rounded-2xl p-4 md:p-5 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-white text-2xl md:text-3xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
            >
              🗓️
            </span>
            <div>
              <p className="font-sans text-base md:text-lg font-bold leading-snug mb-1">
                Scheduling and pricing
              </p>
              <p className="font-sans text-xs md:text-sm text-black/60 leading-snug">
                Each course is priced separately and set per student, so it
                fits the age and starting point. Get in touch and we&rsquo;ll
                work it out.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <a
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
          >
            See the Coding 101 Course
          </a>
          <a
            href={ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
          >
            Start Your Enrollment Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}
