import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Configuração para forçar a compressão e otimização
      // Nota: Alguns plugins de imagemin não mudam a extensão automaticamente no HTML,
      // mas reduzem o peso do arquivo drasticamente.
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.8], speed: 1 },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }]
      }
    })
  ],
})