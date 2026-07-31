import Image from "next/image"

export function RevolutionarySection() {
  return (
    <section className="w-full mt-8 md:mt-12 relative">
      <img src="/img/Orange-flower.png" alt="Flower" className="absolute -top-12 md:-top-20 -right-4 md:-right-8 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56" />
      <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-8">My Father, My Hero</h2>
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)]">

        <div className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8" style={{ aspectRatio: '4/5' }}>
          <Image
            src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/daddy-and-styner/red.png"
            alt="Revolutionary Legacy"
            fill
            className="object-cover"
          />
        </div>

        <blockquote className="max-w-2xl mx-auto border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
          <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
            Before I built systems, I was raised inside one.
          </p>
        </blockquote>

        <div className="text-black font-sans space-y-2 md:space-y-4 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-bold">
            My father is my greatest hero.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            He is a lifelong advocate for Black liberation, a pillar within the Black Power movement, and a survivor of COINTELPRO — a federal counterintelligence program designed to disrupt and dismantle Black political leadership in the United States.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            His life represents resilience under pressure.<br />
            Conviction under surveillance.<br />
            Discipline under attack.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            He has spent decades committed to uplifting Black communities globally — not through slogans, but through organizing, education, and structural work. His perspective is rooted in lived experience. Not theory. Not revisionism. Reality.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            Now, as he prepares to publish his work and share his story more broadly, I am building the infrastructure to ensure his voice reaches a global audience.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-snug font-bold py-2 md:py-4 text-center">
            This is not nostalgia.<br />
            This is continuity.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold text-center">His message speaks to:</p>
          <ul className="text-xs md:text-sm lg:text-base leading-relaxed list-none space-y-1 text-center">
            <li>• Black political consciousness</li>
            <li>• Global liberation movements</li>
            <li>• Historical truth and state repression</li>
            <li>• Community empowerment</li>
            <li>• Intergenerational responsibility</li>
          </ul>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            If you are seeking a speaker, collaborator, historian, or revolutionary thinker grounded in lived experience and disciplined study, you may contact me directly to discuss speaking engagements, panel discussions, interviews, book events, or educational collaborations.
          </p>
          <p className="font-serif italic text-black text-base md:text-xl lg:text-2xl leading-snug text-center mt-6 md:mt-8 pt-6 md:pt-8 border-t-2 border-black">
            His legacy shaped who I am.<br />
            <span className="font-semibold">My work ensures that legacy is preserved, protected, and amplified.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
