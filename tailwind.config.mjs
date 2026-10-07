/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
        display: ['Inter', '-apple-system', 'sans-serif'],
      },
      colors: {
        crimson: '#FF2D55',
        crimsonGlow: 'rgba(255, 45, 85, 0.35)',
        emerald: '#10B981',
        emeraldGlow: 'rgba(16, 185, 129, 0.35)',
        amber: '#F59E0B',
        amberGlow: 'rgba(245, 158, 11, 0.35)',
        obsidian: '#050608',
        monolith: '#0B0D12',
        surface: '#0E1117',
        surfaceHover: '#161A23',
        borderSpecular: 'rgba(255, 255, 255, 0.12)',
        stash: {
          crimson: '#FF2D55',
          crimsonGlow: 'rgba(255, 45, 85, 0.35)',
          emerald: '#10B981',
          emeraldGlow: 'rgba(16, 185, 129, 0.35)',
          amber: '#F59E0B',
          amberGlow: 'rgba(245, 158, 11, 0.35)',
          obsidian: '#050608',
          monolith: '#0B0D12',
          surface: '#0E1117',
          surfaceHover: '#161A23',
          borderSpecular: 'rgba(255, 255, 255, 0.12)',
        }
      }
    },
  },
  plugins: [],
};
