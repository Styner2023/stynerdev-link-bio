export function LiveReadingsSection() {
  return (
    <section className="w-full mt-12">
      <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h2 className="font-retro text-4xl text-black mb-6 text-center">Live Readings & Speaking Engagements</h2>
        
        <div className="relative w-full rounded-2xl border-4 border-black overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
          <img src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/daddy-pictures/1.daddy.jpeg" alt="Watani Stiner" className="w-full h-full object-cover" />
        </div>
        
        <p className="text-base text-black font-sans leading-relaxed mb-6">
          My father is a powerful storyteller who brings his writings to life through live readings and speaking engagements. With decades of lived experience in Black liberation movements and political organizing, he delivers compelling narratives that educate, inspire, and challenge audiences to think deeply about history, power, and resistance. His readings are immersive experiences that connect listeners to the real stories behind the struggle. Book him for your next event to add authentic, transformative voice to your platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
