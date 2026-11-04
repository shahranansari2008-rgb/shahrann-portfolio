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
        dark: {
          bg: '#0a0c10',
          card: '#11141c',
          cardHover: '#161b26',
          border: '#1e2433',
          borderHover: '#2d374d',
          subtle: '#2a3245',
        },
        accent: {
          blue: '#38bdf8',
          blueHover: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.2)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
