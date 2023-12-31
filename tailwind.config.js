/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '1402px': '1402px'
      },
      boxShadow: {
        'top': '0 -10px 15px -3px rgba(0, 0, 0, 0.2), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'decreaseAnimation': {
          '0%': { width: '100%', transform: 'translateX(0)' },
          '100%': { width: '0%', transform: 'translateX(-300%)' }
        }
      },
      animation: {
        'decrease': 'decreaseAnimation 7s linear'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
