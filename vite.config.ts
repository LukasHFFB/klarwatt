import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy PVGIS requests to avoid CORS issues in local development.
      // In production (real domain), PVGIS allows CORS directly.
      '/api/pvgis': {
        target: 'https://re.jrc.ec.europa.eu/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pvgis/, ''),
        secure: true,
      }
    }
  }
})
