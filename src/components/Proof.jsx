import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { fadeUp, stagger } from '../lib/animations'
import { Kicker, Heading, Reveal } from './ui'
import { Bolt } from './icons'

export default function Proof() {
  const { heading, subheading, coachPBs, testimonials } = CONTENT.proof
  return (
    <section id="proof" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <Kicker>Proof</Kicker>
          </Reveal>
          <Reveal>
            <Heading className="mt-4">{heading}</Heading>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-ink/70">{subheading}</p>
          </Reveal>
        </div>

        {/* Coach's own PBs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {coachPBs.map((pb) => (
            <motion.div
              key={pb.label}
              variants={fadeUp}
              className="border-2 border-ink bg-army px-6 py-6 text-center text-paper shadow-hard-sm"
            >
              <div className="font-display text-4xl tracking-tightest sm:text-5xl">{pb.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/70">
                {pb.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Testimonials — auto-scrolling marquee (REPLACE with real results).
          Cards are duplicated so the -50% loop is seamless; pauses on hover. */}
      <div className="mt-12 flex overflow-hidden border-y-2 border-ink bg-paper-dark py-8">
        <div className="flex w-max shrink-0 animate-marquee-fast gap-6 pl-6 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              className="flex w-[300px] shrink-0 flex-col border-2 border-ink bg-paper p-6 shadow-hard-sm sm:w-[340px]"
            >
              <Bolt className="h-6 w-6 text-army" />
              <blockquote className="mt-4 flex-1 text-ink/80">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-ink/15 pt-5">
                {/* REPLACE: client avatar image */}
                <div className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-army font-display text-lg text-paper">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-base uppercase tracking-tightest">{t.name}</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-army">{t.result}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
