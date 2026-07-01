import { useState } from 'react'
import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Bolt } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="flex h-16 w-full items-stretch sm:h-[72px]">
        {/* ---- Left: flush olive logo box + stacked name ---- */}
        <button onClick={() => go('hero')} className="flex items-stretch" aria-label={CONTENT.brand}>
          <span className="flex items-center justify-center border-r-2 border-ink bg-army px-3.5 text-paper sm:px-4">
            <Bolt className="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          <span className="flex flex-col justify-center px-3 text-left font-display text-base uppercase leading-[0.85] tracking-tightest sm:px-4 sm:text-xl">
            <span>Jayden</span>
            <span>Austin</span>
          </span>
        </button>

        {/* pushes everything after it to the right edge */}
        <div className="flex-1" />

        {/* ---- Desktop: bold nav links with dividers ---- */}
        <nav className="hidden items-stretch lg:flex">
          {CONTENT.navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="flex items-center border-l-2 border-ink px-6 font-display text-sm uppercase tracking-wide text-ink transition-colors hover:bg-army hover:text-paper"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* ---- Desktop: CTA ---- */}
        <button
          onClick={() => go('apply')}
          className="hidden items-center border-l-2 border-ink bg-army px-7 font-display text-base uppercase tracking-wide text-paper transition-colors hover:bg-army-dark lg:flex"
        >
          {CONTENT.navCta}
        </button>

        {/* ---- Mobile: hamburger ---- */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex items-center justify-center border-l-2 border-ink bg-army px-5 text-paper lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* ---- Mobile dropdown menu ---- */}
      {open && (
        <div className="border-t-2 border-ink bg-paper lg:hidden">
          {CONTENT.navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full border-b-2 border-ink/10 px-5 py-4 text-left font-display text-lg uppercase tracking-wide text-ink transition-colors hover:bg-army hover:text-paper"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('apply')}
            className="block w-full bg-army px-5 py-4 text-left font-display text-lg uppercase tracking-wide text-paper"
          >
            {CONTENT.navCta}
          </button>
        </div>
      )}
    </header>
  )
}
