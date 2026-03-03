/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
export function FooterSection() {
  return (
    <footer className="px-6 mt-8 pb-10">
      <div className="bg-foreground rounded-full px-2 py-1.5 flex items-center justify-center border-2 border-foreground">
        <div className="flex items-center gap-4">
        <a
          href="https://styner.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background rounded-full py-3.5 px-7 flex-shrink-0"
        >
          <span
            className="text-[#D9FD50] font-sans font-black text-3xl tracking-tight"
            style={{ textShadow: "4px 4px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000" }}
          >
            STYNER
          </span>
        </a>
        <span className="text-white font-sans font-bold text-sm pr-4">Building Trust-First Apps</span>
        </div>
      </div>
    </footer>
  )
}
