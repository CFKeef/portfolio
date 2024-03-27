import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'
import unoConfig from './uno.config'
import { prpcVite } from '@solid-mediakit/prpc-plugin'

export default defineConfig({
  ssr: true,
  vite: {
    plugins: [prpcVite(), UnoCSS(unoConfig)],
  },
})
