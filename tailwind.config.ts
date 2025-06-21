import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables dark mode using the "class" strategy (added by NMT)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        // Dark mode, added by NMT
        dsurface: '#1e1e1e', // Dark Gray
        dprimary: '#0A84FF', // Electric Blue
        dsecondary: '#03DAC5', // Cyan
        dtext: '#E0E0E0',
        dborder: '#373737', // Neutral Gray
        // Light mode
        surface: '#ECEFF1', // Beige
        primary: '#1E88E5', // Rich Blue
        secondary: '#80CBC4', // Teal
        text: '#212121', // Dark Gray
        border: '#BDBDBD', // Light Gray       
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
