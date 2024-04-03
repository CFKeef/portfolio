import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  theme: {
    colors: {
      background: 'hsl(249 51% 15%)',
      foreground: '#221c46',
      muted: {
        DEFAULT: 'hsl(240 5% 64.9%)',
        foreground: 'hsl(240 5% 64.9%)',
      },
      primary: {
        DEFAULT: 'hsl(210 40% 98%)',
        foreground: 'hsl(0 0% 88%)',
      },
      brand: {
        yellow: '#ffcb6b',
        red: '#FF4081',
        gren: '#80CBC4',
      },
    },
  },
})
