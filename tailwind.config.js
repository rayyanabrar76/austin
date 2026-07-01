/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Nick Bare-inspired palette ----
        // Warm cream paper background + near-black ink text.
        paper: {
          DEFAULT: '#F4EFDB', // main cream background
          dark: '#EAE2C6', // slightly deeper cream for alternating panels/cards
        },
        ink: '#16160E', // near-black text / borders
        // Olive / military green — the lead accent (blocks, buttons, highlights).
        army: {
          DEFAULT: '#565A2C',
          dark: '#3F4220',
          light: '#727A3A',
        },
      },
      fontFamily: {
        // Ultra-bold condensed display for huge headlines.
        display: ['Anton', 'Arial Narrow', 'Impact', 'sans-serif'],
        // Squared technical sans for UI / body.
        sans: ['"Chakra Petch"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      boxShadow: {
        // Hard offset "sticker" shadow for the boxy Nick Bare feel.
        hard: '6px 6px 0 0 #16160E',
        'hard-sm': '4px 4px 0 0 #16160E',
      },
    },
  },
  plugins: [],
}
