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
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
              I combine music, technology, and original storytelling.
            </p>
          </blockquote>

          <div className="text-left space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            <p>
              As a developer, Full-Stack Systems Architect, Multi-Domain Strategist, songwriter, lyricist, and creative producer, I create work tailored to each artist.
            </p>
            <p>
              Through GunSmoke Beats, I write original songs and lyrics for artists, projects, organizations, and brands — built around their voice, style, message, and audience.
            </p>
            <p>
              Using professional audio software, open-source tools, and authorized AI technology, I can study an artist&rsquo;s vocal range, tone, phrasing, and delivery to write music that genuinely fits how they perform.
            </p>
            <p>
              When appropriate and with the artist&rsquo;s permission, I can also develop private, locally trained AI voice models from approved recordings to help explore melodies, vocal arrangements, demos, and creative direction. I also teach artists how to use AI responsibly within their own creative workflows.
            </p>
            <p className="font-semibold">
              I do not present myself as the singer on every record. My contribution is in the songwriting, lyrics, concepts, vocal development, production direction, branding, technical systems, and overall execution.
            </p>
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
