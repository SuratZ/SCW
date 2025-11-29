import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-version-query',
      transformIndexHtml(html: string) {
        const version: number = Date.now();
        return html
          .replaceAll('.js"',`.js?v=${version}"`)
          .replaceAll('.css"',`.css?v=${version}"`);
      }
    }
  ],
  base: '/',  // 👈 important!
})
