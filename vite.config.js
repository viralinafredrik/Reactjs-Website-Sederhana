import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['all' , 'b6509892b5330b.lhr.life'] // regex: semua subdomain *.lhr.life
  }
})
