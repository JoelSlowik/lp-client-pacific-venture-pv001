/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1D33',
          deep: '#112B4A',
          ocean: '#1A5276',
          steel: '#2E86C1',
          foam: '#AED6F1',
          salt: '#F0F6FB',
          gold: '#D4A84B',
          ember: '#E8A838',
          sand: '#F5E6CC',
          ink: '#0A1628',
          text: '#E8EDF2',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'%3E%3Cpath fill='%230B1D33' d='M0,30 C360,60 720,0 1080,30 C1260,45 1350,45 1440,30 L1440,60 L0,60Z'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
