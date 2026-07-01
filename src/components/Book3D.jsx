import { motion } from 'framer-motion'
import { CONTENT } from '../content'
import { Bolt } from './icons'

/*
 * Pure-CSS 3D book mockup (no external model/asset needed).
 * `variant`: 'front' (title cover) or 'back' (blurb + barcode).
 * `float` toggles the idle floating animation.
 * Structure keeps the float (framer translateY) and the 3D rotation on
 * separate elements so they don't overwrite each other's transforms.
 */
export default function Book3D({ variant = 'front', float = true, className = '' }) {
  const { bookTitle, bookSubtitle, bookAuthor } = CONTENT.guide

  const Rotator = (
    <div className="group relative h-[380px] w-[270px] [transform-style:preserve-3d] [transform:rotateY(-26deg)_rotateX(6deg)] transition-transform duration-500 hover:[transform:rotateY(-15deg)_rotateX(3deg)]">
      {/* Left spine */}
      <div className="absolute left-0 top-0 h-full w-[46px] origin-left border-2 border-ink bg-army-dark [transform:rotateY(90deg)]" />
      {/* Right page edge */}
      <div className="absolute right-0 top-0 h-full w-[46px] origin-right border-y-2 border-ink bg-[repeating-linear-gradient(90deg,#EAE2C6_0,#EAE2C6_2px,#d8cfa8_2px,#d8cfa8_3px)] [transform:rotateY(-90deg)]" />
      {/* Top edge */}
      <div className="absolute left-0 top-0 h-[46px] w-full origin-top bg-paper-dark [transform:rotateX(-90deg)]" />
      {/* Hidden face */}
      <div className="absolute inset-0 border-2 border-ink bg-army-dark [transform:translateZ(-23px)]" />

      {/* Visible cover */}
      {variant === 'front' ? (
        <div className="absolute inset-0 flex flex-col justify-between border-2 border-ink bg-army p-6 text-paper shadow-hard [transform:translateZ(23px)]">
          <div className="flex items-center justify-between">
            <Bolt className="h-7 w-7" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-paper/70">Free Guide</span>
          </div>
          <div>
            <div className="h-1 w-12 bg-paper/80" />
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] tracking-tightest">{bookTitle}</h3>
            <p className="mt-3 text-sm font-semibold text-paper/80">{bookSubtitle}</p>
          </div>
          <div className="border-t-2 border-paper/30 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-paper/80">
            {bookAuthor}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between border-2 border-ink bg-army-dark p-6 text-paper shadow-hard [transform:translateZ(23px)]">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-paper/70">{bookTitle}</span>
          <div className="space-y-2">
            {[95, 88, 92, 70].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-paper/25" style={{ width: `${w}%` }} />
            ))}
          </div>
          {/* fake barcode */}
          <div className="flex items-end gap-[2px]">
            {[3, 6, 2, 8, 4, 3, 7, 2, 5, 3, 6, 2, 4, 8, 3].map((h, i) => (
              <span key={i} className="w-[2px] bg-paper/80" style={{ height: `${h * 3}px` }} />
            ))}
          </div>
        </div>
      )}
    </div>
  )

  if (!float) return <div className={className}>{Rotator}</div>

  return (
    <motion.div
      className={`[transform-style:preserve-3d] ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {Rotator}
    </motion.div>
  )
}
