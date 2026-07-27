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
        gold: {
          50: '#f8f3e8',
          100: '#efe3c8',
          200: '#e0c896',
          300: '#cead6c',
          400: '#bd9750',
          500: '#a9822f',
          600: '#8c6a26',
          700: '#6f531f',
          800: '#523c17',
          900: '#362810',
        },
        cream: {
          DEFAULT: '#faf8f4',
          50: '#fefdfb',
          100: '#faf8f4',
          200: '#f4f0e7',
        },
        teal: {
          50: '#e9f5f3',
          100: '#c9e8e2',
          200: '#98d0c5',
          300: '#65b7a8',
          400: '#3f9c8c',
          500: '#2b8171',
          600: '#20685c',
          700: '#1a5449',
          800: '#153e37',
          900: '#0f2b26',
          950: '#0a1c19',
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
      },
    },
  },
}
