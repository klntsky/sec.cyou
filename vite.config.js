import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  base: 'https://sec.cyou/',
  build: {
    outDir: '../dist',
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
})
