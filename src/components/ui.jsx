import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { Bolt } from './icons'

/* Reusable "reveal on scroll" wrapper. */
export function Reveal({ children, className = '', variants = fadeUp, as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  )
}

/* Count-up number — animates from 0 to `value` when scrolled into view. */
export function CountUp({ value, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

/* Section kicker: bolt + label. `onDark` flips color for olive backgrounds. */
export function Kicker({ children, onDark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${
        onDark ? 'text-paper' : 'text-army'
      }`}
    >
      <Bolt className="h-4 w-4" />
      {children}
    </span>
  )
}

/* Big condensed display heading. */
export function Heading({ children, className = '' }) {
  return (
    <h2 className={`text-balance text-4xl leading-[0.95] tracking-tightest sm:text-6xl ${className}`}>
      {children}
    </h2>
  )
}
