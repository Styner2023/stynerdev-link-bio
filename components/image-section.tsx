/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
import Image from "next/image"
import { Hearts } from "./hearts"

export function ImageSection() {
  return (
    <section className="relative w-full flex-grow flex flex-col md:flex-row items-start gap-4 mt-4">
      {/* Image area */}
      <figure className="relative w-full md:w-3/5 rounded-[40px] border-2 border-foreground overflow-hidden bg-card" style={{ aspectRatio: '2/3' }}>
        <Image
          src="https://pub-e7093cbeb65d450895246d1b3d1b7fc9.r2.dev/website-assets/Images/styner-about.png"
          alt="Styner Stiner"
          fill
          className="object-cover"
          priority
        />
        <figcaption className="sr-only">Styner Stiner - Developer & Entrepreneur</figcaption>
      </figure>

      {/* Right side content */}
      <div className="w-full md:w-2/5 pt-4 flex flex-col gap-8">
        {/* Hearts row */}
        <div className="-ml-4">
          <Hearts />
        </div>

        <div className="font-serif text-[22px] font-medium leading-relaxed text-foreground space-y-1.5">
          <p>• AI Platforms</p>
          <p>• Web Applications</p>
          <p>• App Deployment</p>
          <p>• Business Systems</p>
          <p>• Databases</p>
          <p>• Entrepreneur</p>
          <p>• Songwriting</p>
        </div>
      </div>
    </section>
  )
}
