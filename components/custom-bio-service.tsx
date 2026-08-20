const genres = [
  "Hip-Hop",
  "Conscious Rap",
  "Trap",
  "Crunk",
  "Soca",
  "Surinamese-Inspired",
  "R&B",
  "Spoken Word",
  "Revolutionary Anthems",
]

// The credit line, broken out so it can be set as liner notes rather than
// buried in a paragraph. This is the integrity statement of the whole
// section — it says plainly what is and is not his voice — so it is given
// the weight of an album credits panel instead of a bolded sentence.
const contributions = [
  "Songwriting",
  "Lyrics",
  "Concepts",
  "Vocal development",
  "Production direction",
  "Branding",
  "Technical systems",
  "Overall execution",
]

// The technical offering, stated as deliverables rather than as tools or
// skill level. Two rules for anyone editing this list:
//
//  1. Never claim to be the engineer. The final mix and master are a
//     collaborator's work, and saying so is the professional norm — producers
//     do not mix their own records. Framing it as a partnership reads as
//     credential, not as a gap.
//  2. Never claim a voice model can be made without the artist's approved
//     recordings and explicit permission. The consent language in the prose
//     above is load-bearing; keep these entries consistent with it.
const capabilities = [
  {
    icon: "💿",
    name: "Rebuild an AI track as a real record",
    blurb:
      "Bring a song you generated with AI. I can rewrite it, arrange it, and produce it properly — as a record with real vocals behind it.",
  },
  {
    icon: "🎙️",
    name: "A private voice model, trained on you",
    blurb:
      "With your permission and your approved recordings, I can train a voice model locally — on a machine, not uploaded to someone else's service.",
  },
  {
    icon: "🧰",
    name: "Your own setup, not a subscription",
    blurb:
      "I can stand up open-source models on your own hardware, trained on your own voice — your version of the tools, owned by you and running without me.",
  },
  {
    icon: "🎛️",
    name: "Engineered alongside a professional",
    blurb:
      "I build in FL Studio and direct the production. A sound engineer I work with takes it the rest of the way — the final mix and master.",
  },
]

const features = [
  "Original songwriting & lyrics",
  "Written to fit your voice & style",
  "Custom work for artists & brands",
  "Licensing available",
]

export function CustomBioService() {
  return (
    <section className="w-full mt-12 mb-8 relative">
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute bottom-2 left-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 scale-x-[-1] scale-y-[-1]" />
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute bottom-2 right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 scale-y-[-1]" />
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6">Need Songs or Lyrics?</h2>

        <div className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8" style={{ aspectRatio: '3/4' }}>
          <img src="/img/14c.jpg" alt="Styner Stiner in the studio, wearing Gunsmoke Beats" className="w-full h-full object-cover" />
        </div>

        <div className="text-black font-sans mb-6 md:mb-8 max-w-2xl mx-auto">
          <blockquote className="text-left border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug text-balance">
              Most people write a song and hope it fits you. I study how you
              sing first.
            </p>
          </blockquote>

          <div className="text-left space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            <p className="font-semibold">
              Your range. Your phrasing. Where you breathe, where you push, the
              note you reach for when nobody is producing you.
            </p>
            <p>
              That is the input. The song is the output — written to how you
              actually perform, not to how a demo singer would.
            </p>
            <p>
              I came to this from software. I architect full-stack systems, and
              the same discipline runs the music: study the inputs, build to
              spec, ship something that works. Through GunSmoke Beats I write
              original songs and lyrics for artists, for brands, and for
              organizations with something worth saying.
            </p>
            <p>
              With your permission and your approved recordings, I can train a
              private voice model on your voice — locally, on a machine, never
              handed to a service that keeps it. We use it to explore melodies,
              arrangements and demos before you ever step to the mic.
            </p>
          </div>

          {/* The closing line of the whole pitch, lifted out of the prose and
              set as a headline. font-retro is the display face used for the
              section headings, so this reads as a statement rather than as a
              sentence that happens to be bold. The accent colour lands only on
              the second half — the reversal is the point. */}
          <div className="text-center border-y-4 border-black py-8 md:py-11 my-8 md:my-12">
            <p className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
              Then I teach you to run it yourself
            </p>
            <p className="font-retro text-2xl md:text-3xl lg:text-4xl leading-tight text-balance max-w-2xl mx-auto mt-5 md:mt-6">
              Most producers hand you a song.{" "}
              <span className="text-[#DA3901]">
                I would rather hand you the system that makes them.
              </span>
            </p>
          </div>

          {/* Liner-notes panel. Deliberately the only element in this section
              with an accent shadow and numbered credits — it should stop the
              eye the way a credits sleeve does. */}
          <div className="text-left border-2 border-black rounded-2xl p-5 md:p-8 shadow-[4px_4px_0px_rgba(218,57,1,1)] md:shadow-[6px_6px_0px_rgba(218,57,1,1)] mb-6 md:mb-8">
            <p className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
              Credit where it is due
            </p>

            {/* text-balance evens the line lengths instead of letting the
                last word drop alone. Keep it on any display line in here. */}
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug text-balance text-center max-w-xl mx-auto mt-3 md:mt-4">
              I do not present myself as the singer on every record.
            </p>

            <p className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#DA3901] mt-7 md:mt-9 pt-6 md:pt-7 border-t-2 border-black/10">
              My contribution
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-0 mt-4">
              {contributions.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 md:gap-4 py-2.5 border-b border-black/10"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-sans text-[10px] md:text-[11px] font-black tabular-nums text-[#DA3901]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm md:text-base font-bold leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I can actually build. Sits after the credits panel because
              that one says what I do; this one says what you get. */}
          <div className="text-left mb-6 md:mb-8">
            <p className="font-sans text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black/40 mb-4 md:mb-5">
              The technical side
            </p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {capabilities.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 border-2 border-black rounded-2xl p-4 md:p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                >
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-black bg-white text-xl md:text-2xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
                  >
                    {item.icon}
                  </span>
                  <span className="font-sans text-sm md:text-base font-bold leading-snug text-pretty">
                    {item.name}
                  </span>
                  <span className="font-sans text-xs md:text-sm leading-snug text-black/70 text-pretty">
                    {item.blurb}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg lg:text-xl leading-snug font-bold py-2 md:py-4 mb-2">
            Every project is original, purpose-driven, and created specifically for the person or brand behind it.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            {genres.map((genre) => (
              <span
                key={genre}
                className="inline-block border-2 border-black rounded-full px-3 md:px-4 py-1.5 font-sans font-bold text-[11px] md:text-xs uppercase tracking-wide"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-base md:text-xl leading-snug font-bold bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-2xl border-4 border-black shadow-[4px_4px_0px_rgba(217,253,80,1)] md:shadow-[6px_6px_0px_rgba(217,253,80,1)] mb-6 md:mb-8">
            Original work. Written for you.<br />
            No templates, no recycled verses.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 md:gap-4 list-none text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[11px] font-bold">
                  ✓
                </span>
                <span className="text-xs md:text-sm leading-relaxed font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://www.gunsmokebeats.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
        >
          Visit Gunsmoke Beats
        </a>

        <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t-2 border-black">
          <h3 className="font-retro text-xl md:text-2xl lg:text-3xl text-black mb-3 md:mb-4">Hear the Music</h3>
          <p className="text-sm md:text-base text-black font-sans leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
            GunSmoke Beats — original hooks, lyrics, artist concepts, and demo previews by Styner Stiner.
          </p>

          <div className="rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8">
            <iframe
              title="GunSmoke Beats on SoundCloud"
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              loading="lazy"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gunsmoke-beats&color=%23000000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
              className="block w-full"
            />
          </div>

          <a
            href="https://soundcloud.com/gunsmoke-beats/sets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
          >
            Open on SoundCloud
          </a>
        </div>
      </div>
    </section>
  )
}
