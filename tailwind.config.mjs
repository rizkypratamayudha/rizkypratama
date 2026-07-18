/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
};
