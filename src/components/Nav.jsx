import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Bolt } from './icons'

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 items-stretch justify-between sm:h-[72px]">
        {/* ---- Left: flush olive logo box + stacked name ---- */}
        <button
          onClick={() => scrollToId('hero')}
          className="flex items-stretch"
          aria-label={CONTENT.brand}
        >
          <span className="flex items-center justify-center border-r-2 border-ink bg-army px-4 text-paper">
            <Bolt className="h-7 w-7" />
          </span>
          <span className="flex flex-col justify-center px-4 text-left font-display text-lg uppercase leading-[0.85] tracking-tightest sm:text-xl">
            <span>Jayden</span>
            <span>Austin</span>
          </span>
        </button>

        {/* ---- Center: bold nav links with dividers ---- */}
        <nav className="hidden items-stretch lg:flex">
          {CONTENT.navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="flex items-center border-l-2 border-ink px-6 font-display text-sm uppercase tracking-wide text-ink transition-colors hover:bg-army hover:text-paper"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* ---- Right: flush CTA ---- */}
        <button
          onClick={() => scrollToId('apply')}
          className="flex items-center border-l-2 border-ink bg-army px-5 font-display text-sm uppercase tracking-wide text-paper transition-colors hover:bg-army-dark sm:px-7 sm:text-base"
        >
          {CONTENT.navCta}
        </button>
      </div>
    </header>
  )
}
