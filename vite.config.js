import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/', // 👈 ensures correct routing in production
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '' // copy to dist root
        }
      ]
    })
  ]
})
