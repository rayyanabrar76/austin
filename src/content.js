/* ============================================================================
 *  CONTENT CONFIG — edit everything here to personalize per client.
 *  Copy, stats, cards, testimonials, links. No need to touch the components.
 * ========================================================================== */
export const CONTENT = {
  brand: 'JAYDEN AUSTIN',
  navLinks: [
    { label: 'For You', id: 'who' },
    { label: 'Coaching', id: 'offer' },
    { label: 'Results', id: 'proof' },
    { label: 'About', id: 'about' },
  ],
  navCta: 'Work With Me',

  // 1. HERO (full-bleed photo, colored headline block, featured card)
  hero: {
    headline: 'I Help Busy People Run PBs',
    // Explicit line breaks for the headline block (one array item per line).
    headlineLines: ['I Help Busy', 'People', 'Run PBs'],
    // Personal intro shown under the headline block (over the photo).
    intro:
      'I’m Jayden Austin — marathon coach, 2:29 marathoner and full-time teacher. I help busy runners chase personal bests around real life.',
    cta: 'Work With Me',
    ctaSecondary: 'See the Results',
    // Full-bleed background photo. REPLACE with a high-res action shot.
    bgImage: '/austin.jpg',
    // Featured card on the right (podcast/video-style highlight).
    featured: {
      tag: 'New',
      kicker: 'The Approach',
      title: 'How I Run PBs Around a Full Life',
      image: '/austin2.jpeg', // REPLACE
      href: 'https://www.instagram.com/p/DZWRqiaD6Hp/?hl=en&img_index=1',
    },
  },

  // 2. STATS BAR (numbers count up on scroll)
  stats: [
    { label: 'Marathon PB', display: '2:29:42', value: 2, suffix: ':29:42' },
    { label: 'Half Marathon', display: '1:10:00', value: 1, suffix: ':10:00' },
    { label: 'Chasing Next', display: 'Sub-70', prefix: 'Sub-', value: 70 },
  ],

  // 3. WHO IT'S FOR
  whoItsFor: {
    heading: 'For Busy People Who Still Want to Get Fast',
    copy: 'You’ve got a job, a family, a life — and a stubborn belief that you’re not done getting faster. You don’t need a pro athlete’s schedule. You need a plan that fits the hours you actually have and a coach who’s lived it.',
    cards: [
      {
        title: 'Parents',
        copy: 'Early mornings, nap-time runs, and zero margin for junk miles. Every session earns its place.',
      },
      {
        title: 'Professionals',
        copy: 'Demanding job, travel, long days. Training that flexes around your calendar — not the other way around.',
      },
      {
        title: 'Time-Crunched Runners',
        copy: 'Limited hours, big goals. Smart, focused work that turns the time you have into a personal best.',
      },
    ],
  },

  // 4. WHAT YOU GET (icon keys map to inline SVGs in components/icons.jsx)
  whatYouGet: {
    heading: 'What You Get',
    subheading: 'Everything built around your life and your goal race.',
    features: [
      {
        icon: 'plan',
        title: 'Custom Training Plans',
        copy: 'A plan built around your life and your goal race — not a copy-paste template. Adjusted week to week as life happens.',
      },
      {
        icon: 'coach',
        title: '1-on-1 Coaching',
        copy: 'Direct guidance and weekly check-ins. Real feedback on your training, your workouts, and your head game.',
      },
      {
        icon: 'race',
        title: 'Race-Day Strategy',
        copy: 'Pacing, fueling, and prep dialed in so you actually hit the PB when it counts — no guessing on the start line.',
      },
    ],
  },

  // 5. PROOF / RESULTS
  proof: {
    heading: 'Coached by Someone Who’s Done It',
    subheading:
      'Not theory — lived experience. The same approach that took me to 2:29 is what I coach.',
    coachPBs: [
      { label: 'Marathon', value: '2:29:42' },
      { label: 'Half Marathon', value: '1:10:00' },
      { label: '10K', value: '31:50' },
    ],
    // REPLACE testimonials with real client results when you have them.
    testimonials: [
      {
        name: 'Sarah M.',
        result: 'Marathon: 3:42 → 3:18',
        quote:
          'I’m a mum of two with a full-time job. Jayden built training around MY week and I smashed a 24-minute PB. Didn’t think it was possible.',
      },
      {
        name: 'David R.',
        result: 'Half: 1:38 → 1:27',
        quote:
          'The weekly check-ins kept me honest. Every run had a purpose. Knocked 11 minutes off my half in one build.',
      },
      {
        name: 'Priya K.',
        result: '10K: 49:10 → 44:05',
        quote:
          'First proper coaching I’ve had. Race-day plan meant I never panicked. Crossed the line with a 5-minute PB and gas left.',
      },
      {
        name: 'Tom H.',
        result: 'Marathon: 4:05 → 3:29',
        quote:
          'Two kids and shift work. I never thought sub-3:30 was realistic. Jayden made the plan fit my chaos and I nailed it.',
      },
      {
        name: 'Aisha B.',
        result: '5K: 24:30 → 21:12',
        quote:
          'Went from random runs to actual structure. Three minutes off my 5K in a season and I finally feel like a real runner.',
      },
      {
        name: 'Marcus L.',
        result: 'Half: 1:52 → 1:41',
        quote:
          'The accountability is everything. Every week had a plan and a reason. Crushed my half PB by 11 minutes.',
      },
    ],
  },

  // Bold scrolling text band (running marquee)
  marquee: [
    'Personal Bests',
    'Marathon',
    'Half Marathon',
    '10K',
    'Sub-3',
    'Race-Day Ready',
    'Every Second Counts',
    'Chase the PB',
  ],

  // 6. ABOUT
  about: {
    heading: 'I Wasn’t Always a Runner.',
    paragraphs: [
      'I’m Jayden — a dad, a husband, an online coach and a full-time teacher. A regular person, just like you. I set big goals and make time to chase them around a busy life.',
      'I haven’t always been a runner. In 2019 I was dared to run a marathon and, with zero training, I suffered and hobbled all the way to the finish — still the hardest physical challenge I’ve ever done. But that first painful step started everything.',
      'Since then I’ve built myself up and brought my times down to an elite level, crossing the marathon in 2:29. More than the number, I built a completely different mindset — and proved what’s possible when you refuse to give up and refuse to make excuses. I believe everyone is capable of far more than they think.',
      'This isn’t about perfect conditions or elite athletes. It’s about real life. I help parents — and anyone juggling a packed schedule — reclaim their health, stay disciplined, and transform, without sacrificing their responsibilities. If you’re trying to fit fitness into a chaotic routine, you’re in the right place.',
    ],
  },

  // 7. APPLY / CTA
  apply: {
    heading: 'Ready to Run Your Fastest Race Yet?',
    subheading:
      'Tell me a little about you and your goal. I’ll be in touch about coaching spots.',
    submit: 'Apply for Coaching',
    successMessage: 'Thanks! Your application is in. I’ll be in touch soon.',
  },

  // MOTIVATIONAL QUOTE (giant text with a running video playing through it)
  quote: {
    lines: ['Success Requires', 'Uncompromising', 'Consistency'],
    // REPLACE: drop a running clip at /public/running2.mp4 to play through the text.
    // Until then, the poster image shows through the letters as a fallback.
    video: '/running2.mp4',
    poster: '/austin.jpg',
  },

  // 8. FREE GUIDE (lead magnet with a 3D book mockup, like nickbare.com's book)
  guide: {
    kicker: 'Free Guide',
    heading: 'The Busy Runner’s PB Blueprint',
    copy: 'A free, step-by-step guide to training for a personal best around a full life — the exact framework I use with the runners I coach.',
    cta: 'Get the Free Guide',
    // Text printed on the 3D book cover:
    bookTitle: 'THE PB BLUEPRINT',
    bookSubtitle: 'Train Less. Run Faster.',
    bookAuthor: 'Jayden Austin',
  },

  // 9. INSTAGRAM (full-width strip + photo wall, like nickbare.com)
  instagram: {
    handle: '@jaydenaustinfitness',
    url: 'https://www.instagram.com/jaydenaustinfitness/',
    cta: 'Follow Me on Instagram',
    // REPLACE: swap in real Instagram photos dropped in /public.
    // Set `src: null` to render a labeled placeholder tile instead.
    photos: [
      { src: '/austin.jpg', alt: 'Jayden running' },
      { src: '/austin2.jpeg', alt: 'Jayden racing' },
      { src: '/insta1.png', alt: 'Official time 69:60' },
      { src: '/insta2.png', alt: 'Half marathon 1:10:00 result' },
      { src: '/insta3.png', alt: 'Marathon finish 2:29:42' },
      { src: '/insta4.png', alt: 'This is what a personal best looks like' },
    ],
  },

  // 9. FOOTER
  footer: {
    tagline: 'Run your fastest race yet.',
    socials: [
      { type: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/jaydenaustinfitness/' },
      { type: 'strava', label: 'Strava', href: '#' }, // REPLACE: real Strava URL
      { type: 'email', label: 'Email', href: 'mailto:hello@example.com' }, // REPLACE: real email
    ],
    legalLinks: [
      { label: 'Terms & Conditions', href: '#' }, // REPLACE
      { label: 'Privacy Policy', href: '#' }, // REPLACE
    ],
    builtBy: 'Built by Jayden Austin Coaching', // REPLACE / remove
  },
}
