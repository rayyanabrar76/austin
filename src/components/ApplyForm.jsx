import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { Heading, Reveal } from './ui'
import { Bolt } from './icons'

export default function ApplyForm() {
  const { heading, subheading, submit, successMessage } = CONTENT.apply
  const [submitted, setSubmitted] = useState(false)

  // Placeholder handler — swap for a real endpoint / form service later.
  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    // eslint-disable-next-line no-console
    console.log('Coaching application:', data)
    setSubmitted(true)
    e.target.reset()
  }

  const inputClass =
    'w-full border-2 border-ink bg-paper px-4 py-3.5 text-ink placeholder-ink/40 outline-none transition-shadow focus:shadow-hard-sm'

  return (
    <section id="apply" className="border-b-2 border-ink bg-army text-paper">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-paper">
              <Bolt className="h-4 w-4" />
              Apply
            </span>
          </Reveal>
          <Reveal>
            <Heading className="mx-auto mt-4 max-w-2xl text-paper">{heading}</Heading>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-4 max-w-xl text-lg text-paper/80">{subheading}</p>
          </Reveal>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="mt-10 border-2 border-ink bg-paper p-6 text-ink shadow-hard sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold uppercase tracking-wide">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-bold uppercase tracking-wide">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="currentPB" className="mb-1.5 block text-sm font-bold uppercase tracking-wide">
                  Current PB
                </label>
                <input id="currentPB" name="currentPB" type="text" placeholder="e.g. 3:45 marathon" className={inputClass} />
              </div>
              <div>
                <label htmlFor="goalRace" className="mb-1.5 block text-sm font-bold uppercase tracking-wide">
                  Goal Race
                </label>
                <input id="goalRace" name="goalRace" type="text" placeholder="e.g. Sub-3:30 marathon" className={inputClass} />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              {submit}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm font-bold uppercase tracking-wide text-army"
              >
                {successMessage}
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
