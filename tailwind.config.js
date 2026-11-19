/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8fd',
          100: '#e8eff9',
          200: '#d3e0f4',
          300: '#abc4ea',
          400: '#7d9fd8',
          500: '#5480c6',
          600: '#3966b2',
          700: '#2a5095',
          800: '#1f3f78',
          900: '#172f5b',
          950: '#0e1d3b',
        },
        ink: { DEFAULT: '#0e1d3b', soft: '#1f3f78', mute: '#7787a3' },
        champagne: { DEFAULT: '#6fa8f2', light: '#dcebfd', dark: '#2b6cd4' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
