import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { Bolt } from './icons'

/*
 * Pure-CSS 3D book mockup (no external model/asset needed).
 * Structure keeps concerns on separate elements so they don't fight:
 *   perspective wrapper → float (framer translateY) → rotated box (CSS 3D) → faces.
 * NOTE: the rotation must NOT live on the same element framer animates — framer
 * writes an inline `transform` that would override a CSS rotate.
 */
export default function Book3D() {
  const { bookTitle, bookSubtitle, bookAuthor } = CONTENT.guide

  return (
    <div className="flex justify-center [perspective:1800px]">
      {/* Float only (framer controls translateY here) */}
      <motion.div
        className="[transform-style:preserve-3d]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* 3D rotation lives on a plain div so framer can't override it */}
        <div className="group relative h-[380px] w-[270px] [transform-style:preserve-3d] [transform:rotateY(-28deg)_rotateX(6deg)] transition-transform duration-500 hover:[transform:rotateY(-16deg)_rotateX(3deg)]">
          {/* Left spine */}
          <div className="absolute left-0 top-0 h-full w-[46px] origin-left [transform:rotateY(90deg)] border-2 border-ink bg-army-dark" />
          {/* Right page edge (stacked-pages look) */}
          <div className="absolute right-0 top-0 h-full w-[46px] origin-right border-y-2 border-ink bg-[repeating-linear-gradient(90deg,#EAE2C6_0,#EAE2C6_2px,#d8cfa8_2px,#d8cfa8_3px)] [transform:rotateY(-90deg)]" />
          {/* Top edge */}
          <div className="absolute left-0 top-0 h-[46px] w-full origin-top bg-paper-dark [transform:rotateX(-90deg)]" />
          {/* Back cover */}
          <div className="absolute inset-0 border-2 border-ink bg-army-dark [transform:translateZ(-23px)]" />

          {/* Front cover */}
          <div className="absolute inset-0 flex flex-col justify-between border-2 border-ink bg-army p-6 text-paper shadow-hard [transform:translateZ(23px)]">
            <div className="flex items-center justify-between">
              <Bolt className="h-7 w-7" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-paper/70">
                Free Guide
              </span>
            </div>
            <div>
              <div className="h-1 w-12 bg-paper/80" />
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] tracking-tightest">
                {bookTitle}
              </h3>
              <p className="mt-3 text-sm font-semibold text-paper/80">{bookSubtitle}</p>
            </div>
            <div className="border-t-2 border-paper/30 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-paper/80">
              {bookAuthor}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
