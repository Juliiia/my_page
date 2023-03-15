import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Similar Problem https://github.com/vitejs/vite/issues/3533
export default defineConfig({
  base: 'juliamucha.art/',
  plugins: [react()],
})
