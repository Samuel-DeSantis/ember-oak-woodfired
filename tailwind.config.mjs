/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f7f3ec',
        linen:     '#ede7da',
        stone:     '#c9bfaf',
        ember:     '#b75f28',
        'ember-dk':'#8f4a1e',
        coal:      '#1e140a',
        ash:       '#4a3728',
        gold:      '#c8922a',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '2xl': '1.25rem' },
    },
  },
  plugins: [],
};
