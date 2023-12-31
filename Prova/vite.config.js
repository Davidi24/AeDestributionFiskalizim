import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // To separate vendor bundle for Bootstrap
          bootstrap: ['bootstrap'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['bootstrap'], // Ensure Bootstrap is included in optimized dependencies
  },
  css: {
    postcss: {
      plugins: [
        // Add necessary PostCSS plugins
      ],
    },
  },
  resolve: {
    alias: {
      // Add Bootstrap aliases if needed
    },
  },
    css: {
    modules: true, // Enable CSS modules
  },
});
