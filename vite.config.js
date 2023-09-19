import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  base: 'https://vishtar.github.io/sec.cyou/',
  build: {
    outDir: '../public',
  },
  plugins: [
    react({
      include: '**/*.tsx',
    }),
  ],
})
