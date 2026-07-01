import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { fadeUp, stagger } from '../lib/animations'
import { Kicker, Heading, Reveal } from './ui'
import { ICONS } from './icons'

export default function WhatYouGet() {
  const { heading, subheading, features } = CONTENT.whatYouGet
  return (
    <section id="offer" className="border-b-2 border-ink bg-army text-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <Kicker onDark>The Offer</Kicker>
          </Reveal>
          <Reveal>
            <Heading className="mt-4 text-paper">{heading}</Heading>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-paper/80">{subheading}</p>
          </Reveal>
        </div>

        {/* Mobile: swipeable scroll-snap carousel · md+: 3-col grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-8 sm:gap-6 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="flex shrink-0 basis-[82%] snap-start flex-col border-2 border-ink bg-paper p-8 text-ink shadow-hard transition-transform hover:-translate-y-1 sm:basis-[46%] md:basis-auto"
            >
              <div className="mb-6 inline-flex w-fit border-2 border-ink bg-army p-3 text-paper">
                {ICONS[f.icon]}
              </div>
              <h3 className="text-2xl tracking-tightest">{f.title}</h3>
              <p className="mt-3 text-ink/70">{f.copy}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* swipe hint — mobile only */}
        <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/60 md:hidden">
          <span aria-hidden>←</span> Swipe <span aria-hidden>→</span>
        </p>
      </div>
    </section>
  )
}
