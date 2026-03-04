export function TestimonialsSection() {
  const principles = [
    { quote: "Technology is leverage. Narrative is power.", name: "StynerDev" },
    { quote: "Direction beats raw talent every time.", name: "StynerDev" }
  ]

  return (
    <section className="w-full mt-12">
      <h2 className="font-retro text-4xl text-black mb-8">Philosophy</h2>
      <div className="w-full mb-8 relative border-4 border-black rounded-3xl pt-8 pb-4 px-4" style={{ overflow: 'visible' }}>
        <div className="rounded-2xl overflow-hidden">
          <img src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/stynerdev-images/6.stynerdev.png" alt="Styner" className="w-full h-auto" />
        </div>
        <img src="/img/yellow-flower.png" alt="Yellow Flower" className="absolute -top-24 -right-4 w-32 h-32 md:w-40 md:h-40" style={{ transform: 'rotate(35deg)' }} />
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {principles.map((principle) => (
          <div key={principle.quote} className="bg-white border-4 border-black rounded-3xl p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <blockquote className="font-serif text-xl text-black mb-6 italic">"{principle.quote}"</blockquote>
            <p className="font-sans font-bold text-black text-right">— {principle.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
