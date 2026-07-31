const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
)

const channels = [
  {
    kicker: "Documentary Feature",
    title: "Cali Faces",
    description: "A 12-minute introduction to Watani Stiner",
    href: "https://youtu.be/xiRnkaa2fnM",
    cta: "Watch Documentary",
  },
  {
    kicker: "Official Channel",
    title: "Watani Stiner",
    description: "Long-form talks & interviews",
    href: "https://www.youtube.com/@watanistiner4169",
    cta: "Visit Channel",
  },
  {
    kicker: "Archive",
    title: "Still Bars & Real Scars",
    description: "Curated public engagements",
    href: "https://www.youtube.com/@steelbarsandrealscars9011",
    cta: "View Archive",
  },
]

const press = [
  { label: "Facebook", href: "https://www.facebook.com/watani.stiner/" },
  { label: "Instagram", href: "https://www.instagram.com/watani.stiner/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/watani-stiner-3ab327bb/" },
  { label: "SF Bay View", href: "https://sfbayview.com/2017/09/watani-stiner-tending-to-historical-wounds/" },
  { label: "KALW Radio", href: "https://www.kalw.org/post/healing-past-through-dialogue" },
]

export function PartnerSection() {
  return (
    <div className="w-full bg-white border-4 border-black rounded-3xl p-6 mt-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <h3 className="font-retro text-2xl text-black mb-6 text-center">
        Connect With Watani Stiner
      </h3>

      <div className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8" style={{ aspectRatio: '3/4' }}>
        <img src="/img/watani-upright.jpg" alt="Watani Stiner" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.href}
              className="flex flex-col bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 text-black">
                <YouTubeIcon />
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest">
                  {channel.kicker}
                </span>
              </div>
              <h4 className="font-sans font-bold text-black text-base leading-snug mt-3">
                {channel.title}
              </h4>
              <p className="text-sm text-black/70 leading-relaxed mt-1 grow">
                {channel.description}
              </p>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-4 inline-block bg-black text-white rounded-full px-4 py-2 font-sans font-bold text-xs hover:bg-[#DA3901] transition-all shadow-[3px_3px_0px_rgba(217,253,80,1)] hover:shadow-[4px_4px_0px_rgba(217,253,80,1)]"
              >
                {channel.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t-2 border-black">
          <h4 className="font-sans font-bold text-black mb-3 text-center">Social Media &amp; Press</h4>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {press.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black rounded-full px-4 py-1.5 font-sans font-bold text-xs text-black hover:bg-black hover:text-white transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 text-center max-w-2xl mx-auto">
          <blockquote className="text-base text-black italic mb-2 font-serif">"Nonviolence does not negate uncompromising resistance to social forces and structures that deny or limit human freedom."</blockquote>
          <p className="text-sm text-black font-semibold mb-4">— Watani Stiner</p>
          <p className="text-sm text-black italic mb-4">For speaking engagements, interviews, or collaborations</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@watanistiner.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            Contact Watani Stiner
          </a>
          <p className="text-sm text-black mt-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@watanistiner.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF76B8]">contact@watanistiner.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
