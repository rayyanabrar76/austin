import { CONTENT } from '../content'
import { Bolt, SOCIAL_ICONS } from './icons'

export default function Footer() {
  const { tagline, socials, legalLinks, builtBy } = CONTENT.footer

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8">
        {/* ---- Boxed monogram logo ---- */}
        <div className="flex h-16 w-28 items-center justify-center gap-2 border-2 border-paper">
          <Bolt className="h-6 w-6 text-paper" />
          <span className="font-display text-2xl uppercase tracking-tightest text-paper">JA</span>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-paper/60">{tagline}</p>

        {/* ---- Circular social icons ---- */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.type}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-army-light text-ink transition-transform hover:-translate-y-1 hover:bg-paper"
            >
              {SOCIAL_ICONS[s.type]}
            </a>
          ))}
        </div>

        {/* ---- Legal links ---- */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {legalLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-sm uppercase tracking-wide text-paper/80 transition-colors hover:text-army-light"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ---- Copyright + credit ---- */}
        <div className="space-y-2 font-display text-xs uppercase tracking-widest text-paper/50">
          <p>
            © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
          </p>
          {builtBy && <p>{builtBy}</p>}
        </div>
      </div>
    </footer>
  )
}
