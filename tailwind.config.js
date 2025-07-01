/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' },
        },
      },
      colors: {
        dark: '#080808',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Clash Display', 'serif'],
      },
      maxWidth: {
        container: '82rem',
      },
    },
  },
}
