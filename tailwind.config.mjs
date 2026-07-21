/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        vscode: {
          window: '#1e1e1e',
          workspace: '#252526',
          activitybar: '#333333',
          sidebar: '#252526',
          tabbar: '#252526',
          editor: '#1e1e1e',
          panel: '#1e1e1e',
          statusbar: '#007acc',
          accent: '#007acc',
        },
        pastel: {
          blue: '#93c5fd',
          purple: '#c4b5fd',
          teal: '#5eead4',
          pink: '#f9a8d4',
          orange: '#fdba74',
          lime: '#bef264',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-1': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        'fade-in-up-2': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in-up-3': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'fade-in-up-4': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
