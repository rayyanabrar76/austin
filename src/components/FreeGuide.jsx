import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Kicker, Reveal } from './ui'
import Book3D from './Book3D'

export default function FreeGuide() {
  const { kicker, heading, copy, cta } = CONTENT.guide

  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        {/* ---- Left: copy in a dark block (Nick Bare book-section style) ---- */}
        <div>
          <Reveal>
            <div className="border-2 border-ink bg-ink p-8 text-paper shadow-hard sm:p-10">
              <Kicker onDark>{kicker}</Kicker>
              <h2 className="mt-4 text-balance text-4xl leading-[0.95] tracking-tightest text-paper sm:text-5xl">
                {heading}
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-md text-lg text-ink/70">{copy}</p>
          </Reveal>
          <Reveal>
            <button onClick={() => scrollToId('apply')} className="btn-primary mt-8">
              {cta}
            </button>
          </Reveal>
        </div>

        {/* ---- Right: 3D book mockup ---- */}
        <Reveal>
          <Book3D />
        </Reveal>
      </div>
    </section>
  )
}
