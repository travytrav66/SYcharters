import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SYcharters/',
  build: {
    rollupOptions: {
      input: {
        main:    'index.html',
        layouts: 'layouts.html',
      },
    },
  },
})
