import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { apiBaseUrl } from './src/constants';

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
});
