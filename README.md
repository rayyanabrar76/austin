# Jayden Austin — Running Coach Landing Page

A bold, single-page marketing site for a running coach. **Nick Bare-inspired**
look: warm cream background, near-black ultra-bold condensed uppercase type,
boxy sharp-corner blocks with hard offset shadows, olive/military-green accent,
and a lightning-bolt motif. Built mobile-first (most traffic comes from
Instagram).

**Stack:** React + Vite + Tailwind CSS + Framer Motion.

## Quick start

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.jsx              # imports + composes the sections only
  main.jsx             # React entry
  content.js           # ALL editable copy/config (edit this first)
  index.css            # Tailwind + global styles + .btn button classes
  lib/
    animations.js      # shared Framer Motion variants (fadeUp, stagger)
    scroll.js          # smooth-scroll helper for in-page anchors
  components/
    icons.jsx          # inline SVG icons (Bolt, feature + social icons)
    ui.jsx             # shared primitives: Reveal, CountUp, Kicker, Heading
    Nav.jsx  Hero.jsx  StatsBar.jsx  WhoItsFor.jsx  WhatYouGet.jsx
    Proof.jsx  About.jsx  ApplyForm.jsx  Footer.jsx
```

## Editing the copy (do this first)

**All text, stats, cards, testimonials, and links live in one place:**
[`src/content.js`](src/content.js). Change the words there — no need to touch
any component. It's organized section by section.

## Swapping in real images

Image spots are marked with `{/* REPLACE: ... */}` comments in the section
components. To use a real photo:

1. Drop the file in [`public/`](public/) (e.g. `public/hero.jpg`).
2. In the relevant component ([`Hero.jsx`](src/components/Hero.jsx),
   [`About.jsx`](src/components/About.jsx)), point the `<img src>` at it.

Also set the Open Graph share image in [`index.html`](index.html).

## Theme & rebranding

The palette and fonts are defined once in
[`tailwind.config.js`](tailwind.config.js):

- `paper` / `paper-dark` — cream backgrounds
- `ink` — near-black text & borders
- `army` (+ `army-dark` / `army-light`) — the olive/green accent

Change `army` to re-skin the accent across the whole site. Fonts are **Anton**
(display) and **Chakra Petch** (UI), loaded in [`index.html`](index.html).
Boxy buttons are the `.btn-primary` / `.btn-outline` classes in
[`src/index.css`](src/index.css).

## Deploy to Vercel

1. Push this folder to a Git repo.
2. Import it in Vercel — it auto-detects Vite via [`vercel.json`](vercel.json).
3. Or run `npx vercel` from this directory.

## The apply form

The form in [`ApplyForm.jsx`](src/components/ApplyForm.jsx) logs submissions to
the browser console (placeholder handler). To make it live, replace
`handleSubmit` with a POST to your form service (Formspree, Resend, a
serverless function, etc.).
