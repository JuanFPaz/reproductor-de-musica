import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    historyApiFallback: true // Para que todas las rutas fallen back a index.html
  }
})
