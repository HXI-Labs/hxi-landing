/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Iowan Old Style', 'Palatino', 'Georgia', 'serif'],
        display: ['DomaineDispNar-Bold', 'Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        paper: '#F3F1EA',
        ink: '#171614',
        muted: '#6E6A62',
        rule: '#D6D2C6',
        mark: '#2B34E6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
