import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          900: '#007B7F',
          light: '#7DE0E6',
        },
        'purple': '#C9B6FF',
        'yellow': '#FFD65A',
        'mint': '#9FFFCB',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'arcade': ['"Orbitron"', 'sans-serif'],
      },
      animation: {
        'run': 'run 0.6s steps(4) infinite',
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'bounce-pixel': 'bounce-pixel 0.4s infinite',
      },
      keyframes: {
        run: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(125, 224, 230, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(125, 224, 230, 1)' },
        },
        'bounce-pixel': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
