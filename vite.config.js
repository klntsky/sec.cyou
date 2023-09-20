import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../public',
  },
  plugins: [
    react({
      include: '**/*.tsx',
    }),
  ],
})
