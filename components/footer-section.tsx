/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
export function FooterSection() {
  return (
    <footer className="px-4 md:px-6 mt-6 md:mt-8 pb-8 md:pb-10 relative">
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-16 md:-bottom-20 -left-16 md:-left-24 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 scale-x-[-1] scale-y-[-1]" />
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-16 md:-bottom-20 -right-16 md:-right-24 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 scale-y-[-1]" />
      <div className="bg-foreground rounded-full px-1 md:px-2 py-1 md:py-1.5 flex items-center justify-center border-2 border-foreground">
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
        <a
          href="https://styner.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background rounded-full py-2 md:py-3.5 px-4 md:px-7 flex-shrink-0"
        >
          <span
            className="text-[#D9FD50] font-sans font-black text-xl md:text-3xl tracking-tight"
            style={{ textShadow: "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000" }}
          >
            STYNER
          </span>
        </a>
        <span className="text-white font-sans font-bold text-xs md:text-sm pr-2 md:pr-4 text-center sm:text-left">Building Trust-First Apps</span>
        </div>
      </div>
    </footer>
  )
}
