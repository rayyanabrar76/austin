import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { fadeUp, stagger } from '../lib/animations'
import { Kicker, Heading, Reveal } from './ui'

export default function WhoItsFor() {
  const { heading, copy, cards } = CONTENT.whoItsFor
  return (
    <section id="who" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <Kicker>Who It's For</Kicker>
        </Reveal>
        <Reveal>
          <Heading className="mt-4 max-w-3xl">{heading}</Heading>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">{copy}</p>
        </Reveal>

        {/* Mobile: swipeable scroll-snap carousel · sm+: 3-col grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group shrink-0 basis-[82%] snap-start border-2 border-ink bg-paper-dark p-7 shadow-hard transition-transform hover:-translate-x-1 hover:-translate-y-1 sm:basis-auto"
            >
              <div className="mb-4 font-display text-4xl text-army">0{i + 1}</div>
              <h3 className="text-2xl tracking-tightest">{card.title}</h3>
              <p className="mt-2 text-ink/70">{card.copy}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* swipe hint — mobile only */}
        <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/50 sm:hidden">
          <span aria-hidden>←</span> Swipe <span aria-hidden>→</span>
        </p>
      </div>
    </section>
  )
}
