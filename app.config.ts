import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'
import unoConfig from './uno.config'

export default defineConfig({
  ssr: true,
  vite: {
    plugins: [UnoCSS(unoConfig)],
  },
  server: {
    prerender: {
      crawlLinks: true,
    },
    preset: "cloudflare-pages",
    rollupConfig: {
      external: ["node:async_hooks"],
    }
  },
})
