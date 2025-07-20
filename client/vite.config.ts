import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0"
  }
})
