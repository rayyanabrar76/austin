/* Shared Framer Motion variants used across sections. */

// Standard "fade + rise" reveal.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Container that staggers its children's reveals.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
