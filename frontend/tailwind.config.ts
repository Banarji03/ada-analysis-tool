import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'bg-base':     '#0b0f1a',
        'bg-surface':  '#0f1623',
        'bg-elevated': '#141d2e',
        'bg-hover':    '#1a2438',
        'accent-primary':   '#22d3ee',   // cyan-400
        'accent-secondary': '#818cf8',   // indigo-400
        'accent-success':   '#34d399',   // emerald-400
        'accent-danger':    '#f87171',   // red-400
        'accent-warning':   '#fb923c',   // orange-400
        'text-primary':     '#e2e8f0',
        'text-secondary':   '#94a3b8',
        'text-muted':       '#475569',
        'border-default':   '#1e2d45',
        'border-active':    '#22d3ee',
      },
    },
  },
  plugins: [],
};

export default config;
