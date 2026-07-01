import { useState } from 'react'
import { CONTENT } from '../content'
import { SOCIAL_ICONS } from './icons'

/* A single photo tile — shows the image, or a clean placeholder if there's no
 * src OR the file fails to load (so missing files never show broken-image icons). */
function PhotoTile({ photo, url, handle }) {
  const [failed, setFailed] = useState(false)
  const showImage = photo.src && !failed

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${handle} on Instagram`}
      className="group relative aspect-square overflow-hidden border-b-2 border-r-2 border-ink"
    >
      {showImage ? (
        // REPLACE: real Instagram photo (see content.js instagram.photos)
        <img
          src={photo.src}
          alt={photo.alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        // Placeholder — swap in a real photo in content.js
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-paper-dark text-ink/40">
          <span className="[&>svg]:h-6 [&>svg]:w-6">{SOCIAL_ICONS.instagram}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Add photo</span>
        </div>
      )}
      {/* hover overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-army/0 text-paper opacity-0 transition-all duration-300 group-hover:bg-army/70 group-hover:opacity-100">
        <span className="[&>svg]:h-8 [&>svg]:w-8">{SOCIAL_ICONS.instagram}</span>
      </div>
    </a>
  )
}

export default function Instagram() {
  const { handle, url, cta, photos } = CONTENT.instagram

  return (
    <section className="border-t-2 border-ink bg-paper">
      {/* ---- Olive strip: handle + CTA (whole bar is a link) ---- */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 border-b-2 border-ink bg-army px-5 py-6 text-paper transition-colors hover:bg-army-dark sm:px-8"
      >
        <span className="flex items-center gap-3">
          <span className="[&>svg]:h-7 [&>svg]:w-7">{SOCIAL_ICONS.instagram}</span>
          <span className="font-display text-xl uppercase tracking-tightest sm:text-2xl">
            {handle}
          </span>
        </span>
        <span className="hidden items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] sm:flex">
          {cta}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>

      {/* ---- Full-bleed photo wall ---- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {photos.map((photo, i) => (
          <PhotoTile key={i} photo={photo} url={url} handle={handle} />
        ))}
      </div>
    </section>
  )
}
