/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#080b12',
          900: '#080b12',
          800: '#0d121c',
          700: '#111826',
          600: '#161f30',
        },
        ink: {
          100: '#eef1f8',
          300: '#c3cadb',
          500: '#8791a8',
          700: '#586178',
        },
        signal: {
          blue: '#4f7dff',
          purple: '#9b6bff',
          cyan: '#2fd6e0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(79,125,255,0.35)',
        'glow-purple': '0 0 40px -8px rgba(155,107,255,0.35)',
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        typing: 'typing 2.4s steps(22) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

