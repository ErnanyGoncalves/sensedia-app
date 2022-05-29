import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>({
  base: command === 'build' ? '/sensedia-app-deploy/' : '/',
  plugins: [react()]
}))
