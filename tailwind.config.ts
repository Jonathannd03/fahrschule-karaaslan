import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ead3',
          300: '#edddba',
          400: '#e0c688',
          500: '#d4af56',
          600: '#c4a044',
          700: '#a3853a',
          800: '#826b2f',
          900: '#6a5726',
        },
        gold: {
          light: '#f4ead3',
          DEFAULT: '#c4a044',
          dark: '#a3853a',
        },
        olive: {
          light: '#9c9c75',
          DEFAULT: '#6b6b3d',
          dark: '#4a4a2a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c4a044 0%, #d4af56 100%)',
        'gradient-gold-dark': 'linear-gradient(135deg, #a3853a 0%, #c4a044 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
