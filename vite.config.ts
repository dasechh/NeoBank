import { reactRouter } from '@react-router/dev/vite';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'app/styles'),
      '@components': path.resolve(__dirname, 'app/components'),
      '@pages': path.resolve(__dirname, 'app/pages'),
      '@services': path.resolve(__dirname, 'app/services'),
      '@assets': path.resolve(__dirname, 'app/assets')
    },
  },
});
