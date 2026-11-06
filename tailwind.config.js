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
        // Peaceful Academic Low-Contrast Theme (Inspired by evs-vit.vercel.app)
        bg: '#18181A',
        side: '#1E1E21',
        panel: '#232326',
        raised: '#2C2C30',
        line: '#36363B',
        lineSoft: '#2A2A2E',
        dim: '#85858D',
        textSecondary: '#BFBFC5',
        textPrimary: '#F4F4F6',
        
        // Calmer, refined OnePlus tones
        oneplus: {
          red: '#E05656',
          redHover: '#C94545',
          redMuted: 'rgba(224, 86, 86, 0.12)',
          redGlow: 'rgba(224, 86, 86, 0.20)',
          black: '#18181A',
          card: '#232326',
          cardHover: '#2C2C30',
          border: '#36363B',
          borderHover: '#47474E',
          textPrimary: '#F4F4F6',
          textSecondary: '#BFBFC5',
          textMuted: '#85858D'
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Figtree', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}
