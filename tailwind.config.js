/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f5',
          100: '#dce2ea',
          200: '#b9c5d5',
          300: '#8fa2ba',
          400: '#62789c',
          500: '#435875',
          600: '#31435b',
          700: '#38475b',
          800: '#2c3747',
          900: '#283140',
          950: '#232a36',
        },
        cream: {
          DEFAULT: '#faf8f4',
          50: '#fefdfb',
          100: '#faf8f4',
          200: '#f4f0e7',
        },
        green: {
          50: '#eef6f0',
          100: '#d7ebdc',
          200: '#b0d7ba',
          300: '#82bc92',
          400: '#579d6c',
          500: '#3c8153',
          600: '#2c6941',
          700: '#255636',
          800: '#1e442c',
          900: '#193824',
          950: '#0d2013',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section-y': '6rem',
        'section-y-lg': '8rem',
      },
      borderColor: {
        DEFAULT: '#e5e0d4',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(15, 22, 34, 0.04), 0 1px 3px 0 rgba(15, 22, 34, 0.06)',
        card: '0 2px 8px rgba(15, 22, 34, 0.06), 0 8px 24px rgba(15, 22, 34, 0.08)',
        elevated: '0 8px 30px rgba(15, 22, 34, 0.12)',
        glow: '0 0 0 1px rgba(44, 105, 65, 0.35), 0 10px 30px -6px rgba(44, 105, 65, 0.25)',
      },
    },
  },
}
