/**
 * @author StynerDev
 * @see https://www.styner.dev/
 *
 * Featured service card — Kuumba Code Birthday Game Lab.
 *
 * Follows the Songs & Lyrics card structure (white card, black border, centered
 * portrait above the prose). It reads as a service rather than a link row via
 * the badge and the accent-shadow emphasis block, not via an inverted palette.
 */
import Image from "next/image"

const BOOKING_URL = "https://www.kuumbacode.com/birthday-game-lab#bgl_games"

type GameTemplate = {
  // Pulled out of the title so it can be rendered as a raised tile.
  icon: string
  title: string
  description: string
  url: string
}

type Platform = {
  platform: string
  blurb: string
  games: GameTemplate[]
}

// The actual templates kids build from at a party. Verified live.
const platforms: Platform[] = [
  {
    platform: "Microsoft MakeCode Arcade",
    blurb: "Arcade-style builds with scoring, lives, enemies and sound.",
    games: [
      {
        icon: "🍓",
        title: "Strawberry Ghost Chase",
        description:
          "More advanced arcade-style game with scoring, lives, a timer, enemies, sound, and customizable difficulty.",
        url: "https://arcade.makecode.com/S56622-15254-87265-97643",
      },
    ],
  },
  {
    platform: "Scratch Creative Games",
    blurb: "Drag-and-drop builds kids can redesign end to end.",
    games: [
      {
        icon: "🦖",
        title: "Dino Catch",
        description:
          "Customize the dinosaur, falling objects, backdrop, sounds, movement, and game speed.",
        url: "https://scratch.mit.edu/projects/1369787078",
      },
      {
        icon: "🚀",
        title: "Astronaut Catch",
        description:
          "Create a space-themed catching game by changing characters, objects, sounds, backdrops, and speed.",
        url: "https://scratch.mit.edu/projects/1369776995",
      },
      {
        icon: "🍎",
        title: "Catching Apples",
        description:
          "A beginner-friendly catching game where kids can redesign the catcher, objects, sounds, background, and difficulty.",
        url: "https://scratch.mit.edu/projects/1369723669",
      },
    ],
  },
]

export function BirthdayGameLabSection() {
  return (
    <section className="w-full mt-12">
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <p className="inline-block border-2 border-black rounded-full px-4 py-1.5 font-sans font-bold text-[11px] md:text-xs uppercase tracking-wide mb-4 md:mb-6">
          🎉 A Kuumba Code Service
        </p>

        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6 max-w-2xl mx-auto">
          Kuumba Code Birthday Game Lab
        </h2>

        <div
          className="relative w-full max-w-md mx-auto rounded-2xl border-4 border-black overflow-hidden mb-6 md:mb-8"
          style={{ aspectRatio: '3/2' }}
        >
          <Image
            src="/img/birthday-game-lab.jpg"
            alt="Children and parents at a Kuumba Code Birthday Game Lab, building games in Scratch on laptops"
            width={1200}
            height={798}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-black font-sans mb-6 md:mb-8 max-w-2xl mx-auto">
          <blockquote className="text-left border-l-4 border-black pl-4 md:pl-6 mb-6 md:mb-8">
            <p className="font-serif italic text-black text-lg md:text-2xl lg:text-3xl leading-snug">
              Kids don&rsquo;t just play the game. They build it.
            </p>
          </blockquote>

          <div className="text-left space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            <p>
              Hands-on coding and game design for birthday parties. Kids play,
              customize, code, and create their own versions of arcade and
              Scratch games.
            </p>
          </div>

          {/* The take-home console is the differentiator, so it gets its own
              callout rather than sitting as the last line of the prose. Kept
              lighter than the black emphasis block below it so the hierarchy
              still reads: promise first, optional extra second. */}
          <div className="text-left border-2 border-dashed border-black rounded-2xl p-4 md:p-5 mb-6 md:mb-8 flex items-start gap-4">
            {/* Same raised tile as the game icons, but shadowed in the accent to
                tie it to the red pill beside it. */}
            <span
              aria-hidden="true"
              className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-white text-2xl md:text-3xl leading-none shadow-[3px_3px_0px_rgba(218,57,1,1)]"
            >
              🎮
            </span>
            <div>
              <p className="inline-block bg-[#DA3901] text-white rounded-full px-3 py-1 font-sans font-black text-[10px] md:text-[11px] uppercase tracking-widest mb-2">
                Optional Add-On
              </p>
              <p className="font-sans text-base md:text-lg font-bold leading-snug mb-1">
                Take-home programmable game consoles
              </p>
              <p className="font-sans text-xs md:text-sm text-black/60 leading-snug">
                Console experiences may also be available — so the game leaves
                the party with them.
              </p>
            </div>
          </div>

          <p className="text-base md:text-xl leading-snug font-bold bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-2xl border-4 border-black shadow-[4px_4px_0px_rgba(218,57,1,1)] md:shadow-[6px_6px_0px_rgba(218,57,1,1)]">
            Every party sends a kid home<br />
            knowing they can build what they play.
          </p>
        </div>

        <div className="border-t-2 border-black pt-8 md:pt-12 max-w-2xl mx-auto">
          <h3 className="font-retro text-xl md:text-2xl lg:text-3xl text-black mb-6 md:mb-8">
            Games They&rsquo;ll Build
          </h3>

          {platforms.map((group) => (
            <div key={group.platform} className="mb-8 last:mb-0">
              <h4 className="font-sans text-sm md:text-base font-black text-black">
                {group.platform}
              </h4>
              <p className="font-sans text-xs md:text-sm text-black/60 mb-4">
                {group.blurb}
              </p>

              <div className="space-y-3 md:space-y-4">
                {group.games.map((game) => (
                  <a
                    key={game.url}
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-left border-2 border-black rounded-2xl p-4 md:p-5 hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                  >
                    <span className="flex items-center gap-4 sm:flex-1">
                      {/* Raised tile so the emoji reads as an icon rather than
                          punctuation. The shadow flips to the accent on hover,
                          when the card ground turns black and swallows it. */}
                      <span
                        aria-hidden="true"
                        className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-white text-2xl md:text-3xl leading-none shadow-[3px_3px_0px_rgba(0,0,0,1)] group-hover:shadow-[3px_3px_0px_rgba(218,57,1,1)] group-hover:-rotate-6 transition-all"
                      >
                        {game.icon}
                      </span>
                      <span>
                        <span className="block font-sans text-sm md:text-base font-bold mb-1 leading-snug">
                          {game.title}
                        </span>
                        <span className="block font-sans text-xs md:text-sm leading-snug opacity-70">
                          {game.description}
                        </span>
                      </span>
                    </span>
                    <span className="font-sans text-[11px] md:text-xs font-black tracking-widest uppercase whitespace-nowrap">
                      Play it →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm text-center mt-8 md:mt-12 hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
        >
          Book a Birthday Game Lab
        </a>
      </div>
    </section>
  )
}
