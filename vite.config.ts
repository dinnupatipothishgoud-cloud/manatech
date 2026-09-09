import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          exportTools: ['jspdf', 'html2canvas'],
          icons: ['lucide-react', 'canvas-confetti'],
        },
      },
    },
  },
});
