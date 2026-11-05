/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oneplus: {
          red: '#EB0029',
          redHover: '#D00024',
          redMuted: 'rgba(235, 0, 41, 0.12)',
          redGlow: 'rgba(235, 0, 41, 0.25)',
          black: '#0B0C0E',
          card: '#14161C',
          cardHover: '#1B1E26',
          border: '#22252C',
          borderHover: '#333742',
          textPrimary: '#FFFFFF',
          textSecondary: '#9499A8',
          textMuted: '#5F6370'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}
