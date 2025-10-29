import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 👈 ensures correct routing in production
  plugins: [react()],
  build: {
    outDir: 'dist', // 👈 confirms where Render looks for build output
  },
})
