import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests-setup.js',
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
})