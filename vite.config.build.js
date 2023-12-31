/* configuration : vite (build) - =========================================================== - */
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/product-preview/',
  resolve: {
    alias: [ { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) } ]
  }
})