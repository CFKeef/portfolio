import solid from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ['development'],
  },
  test: {
    env: loadEnv('', process.cwd(), ''),
  },
})
