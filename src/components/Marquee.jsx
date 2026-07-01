import { CONTENT } from '../content'
import { Bolt } from './icons'

/*
 * Bold, infinitely-scrolling text band. The item list is rendered twice so the
 * -50% keyframe loops seamlessly. Pauses on hover.
 */
export default function Marquee() {
  const items = CONTENT.marquee
  // Render the list twice for a seamless loop.
  const loop = [...items, ...items]

  return (
    <section className="border-b-2 border-ink bg-ink py-4 sm:py-5">
      <div className="flex overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
              <span className="font-display text-2xl uppercase tracking-tightest text-paper sm:text-3xl">
                {item}
              </span>
              <Bolt className="h-5 w-5 shrink-0 text-army-light" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
