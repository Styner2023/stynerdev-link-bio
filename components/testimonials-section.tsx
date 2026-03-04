export function TestimonialsSection() {
  const principles = [
    { quote: "Technology is leverage. Narrative is power.", name: "StynerDev" },
    { quote: "Direction beats raw talent every time.", name: "StynerDev" }
  ]

  return (
    <section className="w-full mt-8 md:mt-12">
      <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-8">Philosophy</h2>
      <div className="w-full mb-4 md:mb-8 relative border-4 border-black rounded-2xl md:rounded-3xl pt-4 md:pt-8 pb-2 md:pb-4 px-2 md:px-4" style={{ overflow: 'visible' }}>
        <div className="rounded-xl md:rounded-2xl overflow-hidden">
          <img src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/stynerdev-images/6.stynerdev.png" alt="Styner" className="w-full h-auto" />
        </div>
        <img src="/img/yellow-flower.png" alt="Yellow Flower" className="absolute -top-16 md:-top-24 -right-2 md:-right-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" style={{ transform: 'rotate(35deg)' }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        {principles.map((principle) => (
          <div key={principle.quote} className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[3px_3px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <blockquote className="font-serif text-sm md:text-lg lg:text-xl text-black mb-4 md:mb-6 italic">"{principle.quote}"</blockquote>
            <p className="font-sans font-bold text-xs md:text-sm lg:text-base text-black text-right">— {principle.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
