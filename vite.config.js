import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss" as *;
                         @use "@/styles/_mixins.scss" as *;`
      }
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          } else if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          } else if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          } else if (id.includes('node_modules/swiper')) {
            return 'swiper';
          } else if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
