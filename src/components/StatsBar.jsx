import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { fadeUp, stagger } from '../lib/animations'
import { CountUp } from './ui'

export default function StatsBar() {
  return (
    <section className="border-b-2 border-ink bg-army">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-7xl grid-cols-1 divide-y-2 divide-paper/20 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0"
      >
        {CONTENT.stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="px-6 py-10 text-center">
            <div className="font-display text-5xl leading-none tracking-tightest text-paper sm:text-6xl">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-paper/70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
