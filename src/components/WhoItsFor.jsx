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

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group border-2 border-ink bg-paper-dark p-7 shadow-hard transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <div className="mb-4 font-display text-4xl text-army">0{i + 1}</div>
              <h3 className="text-2xl tracking-tightest">{card.title}</h3>
              <p className="mt-2 text-ink/70">{card.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
