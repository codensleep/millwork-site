import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update 'base' to match your GitHub repository name, e.g. '/my-repo-name/'
// Leave as '/' if deploying to a custom domain or root
export default defineConfig({
  plugins: [react()],
  base: '/millwork-site/',
})
