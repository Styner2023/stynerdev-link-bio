export function TestimonialsSection() {
  const principles = [
    { quote: "Technology is leverage. Narrative is power.", name: "StynerDev" },
    { quote: "Direction beats raw talent every time.", name: "StynerDev" }
  ]

  return (
    <section className="w-full mt-12">
      <div className="grid md:grid-cols-2 gap-6">
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
