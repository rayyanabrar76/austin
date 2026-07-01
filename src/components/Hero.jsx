import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Bolt } from './icons'

export default function Hero() {
  const { headline, headlineLines, intro, cta, ctaSecondary, bgImage, featured } = CONTENT.hero
  const lines = headlineLines || [headline]

  // Shared olive headline block (used by both mobile + desktop heroes).
  const HeadlineBlock = (
    <div className="inline-block border-2 border-ink bg-army px-7 py-7 shadow-hard sm:px-9 sm:py-9">
      <h1 className="text-5xl leading-[0.9] tracking-tightest text-paper sm:text-6xl lg:text-7xl">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    </div>
  )

  return (
    <>
      {/* id lives on a wrapper so the nav "logo" scroll works on every breakpoint */}
      <div id="hero">
        {/* ================= MOBILE: short VIDEO cover hero (nickbare style) ================= */}
        <section className="relative flex min-h-[68svh] flex-col justify-end overflow-hidden border-b-2 border-ink bg-ink pt-24 lg:hidden">
          {/* REPLACE: /running.mp4 — background running clip (poster falls back to photo) */}
          {/* Zoomed into the centre of the clip so the baked-in text at the top
              (and stats at the bottom) of the video are cropped out of view.
              Tweak scale / object-position if a different part should show. */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={bgImage}
            className="absolute inset-0 z-0 h-full w-full origin-center scale-[1.55] object-cover object-center"
          >
            <source src="/running.mp4" type="video/mp4" />
          </video>
          {/* darken the bottom so the block + scroll cue read cleanly */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 px-5 pb-12"
          >
            {HeadlineBlock}
            <button onClick={() => scrollToId('apply')} className="btn-primary mt-6 w-full">
              {cta}
            </button>
          </motion.div>
        </section>

        {/* ================= DESKTOP: full-bleed PHOTO hero ================= */}
        <section className="relative hidden min-h-[100svh] flex-col justify-end overflow-hidden border-b-2 border-ink bg-paper pt-24 lg:flex">
          {/* Full-bleed background photo */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* REPLACE: Jayden action running shot, high-res */}
            <img
              src={bgImage}
              alt="Jayden Austin running"
              className="h-full w-full object-cover object-[center_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent" />
          </div>

          {/* Bottom row: headline block (left) + featured card (right) */}
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 items-end gap-8 px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-7 mb-16"
            >
              {HeadlineBlock}
            </motion.div>

            {/* Featured card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-5 justify-self-end"
            >
              <a
                href={featured.href}
                className="group block w-full max-w-md border-2 border-ink bg-ink text-paper shadow-hard transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-ink">
                  {/* REPLACE: featured video/article thumbnail */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-0 top-0 border-b-2 border-l-2 border-ink bg-army px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                    {featured.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-army text-paper transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-army-light">
                    <Bolt className="h-4 w-4" />
                    {featured.kicker}
                  </span>
                  <h3 className="mt-2 font-display text-2xl uppercase leading-[0.95] tracking-tightest text-paper">
                    {featured.title}
                  </h3>
                </div>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ---- Intro + CTAs bar (directly under the hero, all breakpoints) ---- */}
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-lg font-semibold text-ink sm:text-xl">{intro}</p>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <button onClick={() => scrollToId('apply')} className="btn-primary">
              {cta}
            </button>
            <button onClick={() => scrollToId('proof')} className="btn-outline">
              {ctaSecondary}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
