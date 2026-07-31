export function LiveReadingsSection() {
  return (
    <section className="w-full mt-8 md:mt-12">
      <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-8 text-center">Live Readings &amp; Speaking Engagements</h2>
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <div className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8" style={{ aspectRatio: '3/4' }}>
          <img src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/daddy-pictures/1.daddy.jpeg" alt="Watani Stiner" className="w-full h-full object-cover" />
        </div>

        <blockquote className="max-w-2xl mx-auto border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
          <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
            My father is a powerful storyteller.
          </p>
        </blockquote>

        <div className="text-black font-sans space-y-2 md:space-y-4 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            He brings his writings to life through live readings and speaking engagements.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            With decades of lived experience in Black liberation movements and political organizing, he delivers compelling narratives that educate, inspire, and challenge audiences to think deeply about history, power, and resistance.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-snug font-bold py-2 md:py-4 text-center">
            His readings are immersive experiences that connect listeners to the real stories behind the struggle.
          </p>
          <p className="font-serif italic text-black text-base md:text-xl lg:text-2xl leading-snug text-center mt-6 md:mt-8 pt-6 md:pt-8 border-t-2 border-black">
            Book him for your next event to add an authentic,{" "}
            <span className="font-semibold">transformative voice to your platform.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-8">
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=readings@watanistiner.com&tf=cm" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            Book a Reading
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=speaking@watanistiner.com&tf=cm" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm text-center hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            Invite to Speak
          </a>
        </div>
      </div>
    </section>
  )
}
