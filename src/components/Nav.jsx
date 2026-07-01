import { useEffect, useState } from 'react'
import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Bolt } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  // Subtle elevation once the user scrolls past the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_0_0_rgba(22,22,14,0.12)]' : ''
      }`}
    >
      <div className="flex h-16 w-full items-stretch sm:h-[72px]">
        {/* ---- Left: flush olive logo box + stacked name ---- */}
        <button
          onClick={() => go('hero')}
          className="group flex items-stretch focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-army"
          aria-label={CONTENT.brand}
        >
          <span className="flex items-center justify-center border-r-2 border-ink bg-army px-3.5 text-paper transition-colors duration-200 group-hover:bg-army-light sm:px-4">
            <Bolt className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 sm:h-7 sm:w-7" />
          </span>
          {/* stacked name — desktop only (centred wordmark used on mobile) */}
          <span className="hidden flex-col justify-center px-3 text-left font-display text-base uppercase leading-[0.85] tracking-tightest transition-colors duration-200 group-hover:text-army sm:px-4 sm:text-xl lg:flex">
            <span>Jayden</span>
            <span>Austin</span>
          </span>
        </button>

        {/* ---- Mobile: centred wordmark ---- */}
        <button
          onClick={() => go('hero')}
          aria-label={CONTENT.brand}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-lg uppercase leading-none tracking-tightest text-ink transition-colors duration-200 hover:text-army focus:outline-none lg:hidden"
        >
          Jayden Austin
        </button>

        {/* pushes the nav to the centre */}
        <div className="flex-1" />

        {/* ---- Desktop: centred nav links with animated accent underline ---- */}
        <nav className="hidden items-stretch lg:flex">
          {CONTENT.navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative flex items-center border-l-2 border-ink px-6 font-display text-sm uppercase tracking-wide text-ink transition-colors duration-200 hover:text-army focus:outline-none focus-visible:text-army"
            >
              {l.label}
              {/* accent bar slides up from the bottom edge on hover */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-army transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </button>
          ))}
        </nav>

        {/* balances the left spacer so the nav sits dead-centre */}
        <div className="hidden flex-1 lg:block" />

        {/* ---- Desktop: CTA with hard-shadow press ---- */}
        <div className="hidden items-center border-l-2 border-ink pl-5 pr-6 lg:flex">
          <button
            onClick={() => go('apply')}
            className="group inline-flex items-center gap-2 border-2 border-ink bg-army px-6 py-2.5 font-display text-base uppercase tracking-wide text-paper shadow-hard-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-army-dark hover:shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:ring-army"
          >
            {CONTENT.navCta}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* ---- Mobile: hamburger ---- */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex items-center justify-center border-l-2 border-ink bg-army px-5 text-paper transition-colors duration-200 hover:bg-army-dark lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* ---- Mobile dropdown menu (animated open/close) ---- */}
      <div
        className={`overflow-hidden border-ink bg-paper transition-all duration-300 ease-out lg:hidden ${
          open ? 'max-h-[26rem] border-t-2' : 'max-h-0'
        }`}
      >
        {CONTENT.navLinks.map((l, i) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            style={{ transitionDelay: open ? `${i * 45 + 60}ms` : '0ms' }}
            className={`flex w-full items-center justify-between border-b-2 border-ink/10 px-5 py-4 text-left font-display text-lg uppercase tracking-wide text-ink transition-all duration-300 hover:bg-army hover:text-paper ${
              open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
            }`}
          >
            {l.label}
            <span className="text-army/60">/{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
        <div className="p-4">
          <button
            onClick={() => go('apply')}
            className="group flex w-full items-center justify-center gap-2 border-2 border-ink bg-army px-5 py-4 font-display text-lg uppercase tracking-wide text-paper shadow-hard-sm transition-transform duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {CONTENT.navCta}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
