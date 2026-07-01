/* Smooth-scroll to an in-page section by id (used by nav + CTA buttons). */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
