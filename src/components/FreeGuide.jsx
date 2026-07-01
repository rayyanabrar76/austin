import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Kicker, Reveal } from './ui'
import Book3D from './Book3D'

export default function FreeGuide() {
  const { kicker, heading, copy, cta } = CONTENT.guide

  return (
    <section id="guide" className="relative overflow-hidden border-b-2 border-ink bg-paper">
      {/* ---- Diagonal olive panel + dramatic duotone athlete photo (right) ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[55%] overflow-hidden border-l-2 border-ink bg-army [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]">
          {/* dramatic running shot, darkened + olive-tinted for a bold duotone */}
          <img
            src="/insta3.png"
            alt=""
            className="h-full w-full object-cover object-top brightness-[0.55] grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-army/70 mix-blend-multiply" />
          {/* subtle diagonal lightning-bolt sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-army-light/10 to-transparent" />
        </div>
      </div>

      {/* ---- Giant faded background word ---- */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-0 z-0 select-none font-display text-[9rem] uppercase leading-none tracking-tightest text-ink/[0.05] sm:text-[15rem]"
      >
        Free
      </span>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:gap-12 sm:px-8 sm:py-28 lg:grid-cols-2">
        {/* ---- Book cluster: FIRST on mobile, right column on desktop ---- */}
        <Reveal className="order-1 flex items-center justify-center lg:order-2">
          {/* The whole cluster (both books + sticker) scales as one unit so the
              mobile view is an exact smaller copy of desktop. lg = scale-100 =
              identical to the original desktop layout. */}
          <div className="relative flex min-h-[300px] w-full origin-center scale-[0.68] items-center justify-center sm:min-h-[440px] sm:scale-90 lg:scale-100">
            {/* back book (peeking, rotated) — shown at every breakpoint now */}
            <div className="absolute left-1/2 -translate-x-[92%] rotate-[10deg] scale-90 opacity-95">
              <Book3D variant="back" float={false} />
            </div>
            {/* front book */}
            <div className="relative z-10 translate-x-8">
              <Book3D variant="front" />
            </div>
            {/* FREE sticker */}
            <div className="absolute right-2 top-2 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border-2 border-ink bg-paper text-center font-display uppercase leading-none tracking-tightest text-ink shadow-hard-sm sm:right-6">
              <span className="text-2xl">Free</span>
              <span className="mt-1 text-[9px] tracking-[0.2em] text-army">Download</span>
            </div>
          </div>
        </Reveal>

        {/* ---- Copy: AFTER the book on mobile, left column on desktop ---- */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="border-2 border-ink bg-ink p-7 text-paper shadow-hard sm:p-10">
              <Kicker onDark>{kicker}</Kicker>
              <h2 className="mt-4 text-balance text-3xl leading-[0.95] tracking-tightest text-paper sm:text-5xl">
                {heading}
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-md text-base text-ink/70 sm:text-lg">{copy}</p>
          </Reveal>
          <Reveal>
            <button onClick={() => scrollToId('apply')} className="btn-primary mt-8 w-full sm:w-auto">
              {cta}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
