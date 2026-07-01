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

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="border-2 border-ink bg-paper p-8 text-ink shadow-hard transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex border-2 border-ink bg-army p-3 text-paper">
                {ICONS[f.icon]}
              </div>
              <h3 className="text-2xl tracking-tightest">{f.title}</h3>
              <p className="mt-3 text-ink/70">{f.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
