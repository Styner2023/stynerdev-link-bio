/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full mb-4 pt-8 pb-12">
      <div className="w-full">
        <div className="bg-white border-4 border-black rounded-full px-8 py-3 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] inline-block">
          <span className="font-display text-xl font-medium text-black">Full Stack Developer</span>
        </div>
        <h1 className="font-retro text-[48px] md:text-[64px] leading-[1.1] text-black font-bold mb-8">
          I build systems that preserve power, protect truth, and scale impact.
        </h1>
        <p className="text-lg text-black font-sans leading-relaxed mb-8 italic">
          This is infrastructure + legacy + political memory.
        </p>
        <div className="relative w-full rounded-3xl border-4 border-black overflow-hidden mb-8" style={{ aspectRatio: '2/3' }}>
          <Image
            src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/stynerdev-images/9.stynerdev.png"
            alt="Styner Stiner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h2 className="font-retro text-3xl text-black font-bold mb-6">Who I Am</h2>
        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <div className="text-black font-sans space-y-4 pb-6">
          <p className="text-lg leading-relaxed font-bold">
            My name is Styner Stiner. I build systems that preserve power, protect truth, and scale impact.
          </p>
          <p className="text-base leading-relaxed">
            I'm a full-stack developer, AI systems architect, and project builder focused on infrastructure that lasts — platforms designed to serve people, not trends.
          </p>
          <p className="text-base leading-relaxed">
            But I'm also something more personal.
          </p>
          <p className="text-base leading-relaxed font-semibold">
            I am the daughter of a revolutionary.
          </p>
          <p className="text-base leading-relaxed">
            My father was a pillar of the Black Power movement and a survivor of COINTELPRO — a government program designed to disrupt, discredit, and dismantle Black liberation leaders. His life represents resilience, resistance, and the cost of speaking truth to power.
          </p>
          <p className="text-base leading-relaxed font-semibold">
            Part of my work is ensuring that legacy is not lost.
          </p>
          <p className="text-base leading-relaxed">
            I develop global outreach systems, digital archives, and structured platforms that connect people to history, context, and community. I use technology not just to build apps — but to protect narratives that were meant to disappear.
          </p>
          <p className="text-base leading-relaxed font-semibold">My work spans:</p>
          <ul className="text-base leading-relaxed list-none space-y-1">
            <li>• AI-powered platforms</li>
            <li>• Blockchain infrastructure (ICP / DFINITY)</li>
            <li>• OSINT and verification systems</li>
            <li>• Marketplace and diaspora ecosystems</li>
            <li>• Legacy preservation and digital archives</li>
          </ul>
          <p className="text-base leading-relaxed font-semibold">
            I think in systems.
          </p>
          <p className="text-base leading-relaxed">
            Front end. Back end. Identity. Payments. Security. Historical memory. Distribution.
          </p>
          <p className="text-base leading-relaxed">
            Technology is leverage. Narrative is power.
          </p>
          <p className="text-base leading-relaxed">
            I don't chase trends. I build structure.<br />
            I don't build noise. I build infrastructure.<br />
            I don't separate tech from purpose.
          </p>
          <p className="text-base leading-relaxed">
            Everything I create sits at the intersection of sovereignty, intelligence, and longevity.
          </p>
          <p className="text-base leading-relaxed italic font-semibold">
            Direction beats raw talent every time.
          </p>
        </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 mt-6">
          <a href="https://www.styner.dev/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            View My Work
          </a>
          <div className="">
            <h3 className="font-bold text-black text-xl">Infrastructure Builder</h3>
            <p className="text-black text-sm m-0">Systems That Last</p>
          </div>
        </div>
      </div>
    </section>
  )
}
