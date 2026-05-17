import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { apiBaseUrl } from './src/constants';

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/email': {
        target: `${apiBaseUrl}`,
        changeOrigin: true,
      },
      '/application': {
        target: `${apiBaseUrl}`,
        changeOrigin: true,
      },
      '/document': {
        target: `${apiBaseUrl}`,
        changeOrigin: true,
      },
      '/admin': {
        target: `${apiBaseUrl}`,
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'threads',
    passWithNoTests: true,
    setupFiles: ['./vitest-setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
});
