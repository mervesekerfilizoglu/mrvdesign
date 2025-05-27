import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()]
})
