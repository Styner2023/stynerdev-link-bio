/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
export function FooterSection() {
  return (
    <footer className="mt-6 md:mt-8 mb-4 md:mb-6 mx-4 md:mx-6 relative">
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-16 md:-bottom-20 -left-24 md:-left-32 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 scale-x-[-1] scale-y-[-1]" />
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-16 md:-bottom-20 -right-24 md:-right-32 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 scale-y-[-1]" />
      <div className="bg-black rounded-full px-2 py-2 border-2 border-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <a
            href="https://styner.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D9FD50] rounded-full py-2 px-4 md:px-6 flex-shrink-0"
          >
            <span className="text-black font-sans font-black text-lg md:text-2xl tracking-tight">
              STYNER
            </span>
          </a>
          <span className="text-white font-sans font-bold text-xs md:text-sm text-center px-2 hidden md:inline">Building Trust-First Apps</span>
        </div>
      </div>
      <div className="text-center mt-2 md:hidden">
        <span className="text-black font-sans font-bold text-sm">Building Trust-First Apps</span>
      </div>
    </footer>
  )
}
