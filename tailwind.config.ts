import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0f0d',
        paper: '#f2efe7',
        'text-light': '#f2efe7',
        'text-dark': '#0e0f0d',
        'muted-light': 'rgba(242, 239, 231, 0.7)',
        'muted-dark': '#46463f',
        accent: '#c8f24e',
      },
      maxWidth: { content: '1320px' },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: { header: '0 1px 0 rgba(242, 239, 231, 0.08)' },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(90deg, rgba(14, 15, 13, .95) 0%, rgba(14, 15, 13, .84) 40%, rgba(14, 15, 13, .42) 74%, rgba(14, 15, 13, .6) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 800ms ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;