/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full mb-4 pt-4 md:pt-8 pb-8 md:pb-12">
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -top-12 md:-top-16 -right-8 md:-right-12 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56" />
      <div className="w-full">
        <div className="bg-white border-4 border-black rounded-full px-4 md:px-8 py-2 md:py-3 mb-4 md:mb-8 shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] inline-block">
          <span className="font-display text-sm md:text-xl font-medium text-black">Full Stack Developer</span>
        </div>
        <h1 className="font-retro text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-black font-bold mb-4 md:mb-8">
          I build systems that preserve power, protect truth, and scale impact.
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-black font-sans leading-relaxed mb-4 md:mb-8 italic">
          This is infrastructure + legacy + political memory.
        </p>
        <div className="relative w-full rounded-2xl md:rounded-3xl border-4 border-black overflow-hidden mb-4 md:mb-8" style={{ aspectRatio: '2/3' }}>
          <Image
            src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/stynerdev-images/9.stynerdev.png"
            alt="Styner Stiner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h2 className="font-retro text-2xl md:text-3xl text-black font-bold mb-4 md:mb-6">Who I Am</h2>
        <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <div className="text-black font-sans space-y-3 md:space-y-4 pb-4 md:pb-6">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-bold">
            My name is Styner Stiner. I build systems that preserve power, protect truth, and scale impact.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            I'm a full-stack developer, AI systems architect, and project builder focused on infrastructure that lasts — platforms designed to serve people, not trends.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            But I'm also something more personal.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold">
            I am the daughter of a revolutionary.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            My father was a pillar of the Black Power movement and a survivor of COINTELPRO — a government program designed to disrupt, discredit, and dismantle Black liberation leaders. His life represents resilience, resistance, and the cost of speaking truth to power.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold">
            Part of my work is ensuring that legacy is not lost.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            I develop global outreach systems, digital archives, and structured platforms that connect people to history, context, and community. I use technology not just to build apps — but to protect narratives that were meant to disappear.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold">My work spans:</p>
          <ul className="text-xs md:text-sm lg:text-base leading-relaxed list-none space-y-1">
            <li>• AI-powered platforms</li>
            <li>• Blockchain infrastructure (ICP / DFINITY)</li>
            <li>• OSINT and verification systems</li>
            <li>• Marketplace and diaspora ecosystems</li>
            <li>• Legacy preservation and digital archives</li>
          </ul>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold">
            I think in systems.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            Front end. Back end. Identity. Payments. Security. Historical memory. Distribution.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            Technology is leverage. Narrative is power.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            I don't chase trends. I build structure.<br />
            I don't build noise. I build infrastructure.<br />
            I don't separate tech from purpose.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            Everything I create sits at the intersection of sovereignty, intelligence, and longevity.
          </p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed italic font-semibold">
            Direction beats raw talent every time.
          </p>
        </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-6">
          <a href="https://www.styner.dev/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            View My Work
          </a>
          <div className="">
            <h3 className="font-bold text-black text-base md:text-xl">Infrastructure Builder</h3>
            <p className="text-black text-xs md:text-sm m-0">Systems That Last</p>
          </div>
        </div>
      </div>
    </section>
  )
}
