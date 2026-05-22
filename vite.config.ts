import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Configuração para manter qualidade impecável (Zero Perda)
      webp: {
        lossless: true,
      },
      png: {
        lossless: true,
      },
      jpeg: {
        quality: 100,
      },
      // Faz a otimização apenas no momento de gerar o site para a Vercel
      mode: 'build',
    }),
  ],
})