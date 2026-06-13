/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          900: '#0B2521',
          800: '#0F2E2A',
          700: '#143A34',
          600: '#1C4A42',
          500: '#2A6056',
        },
        gold: {
          DEFAULT: '#C9A86A',
          light: '#E0C88E',
          deep: '#A9854B',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          2: '#F7F8F7',
        },
        ink: {
          DEFAULT: '#1A2421',
          muted: '#6B7A74',
        },
        line: 'rgba(201,168,106,0.28)',
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(11,37,33,0.55)',
        gold: '0 12px 28px -10px rgba(201,168,106,0.6)',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
}
