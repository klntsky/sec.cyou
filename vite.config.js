import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist/static',
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
})
