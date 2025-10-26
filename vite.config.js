import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/', // IMPORTANT pour GitHub Pages (repo StrongCatBox/myportfolio)
})
