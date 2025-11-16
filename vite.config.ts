import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
  // Gzip compression for production
  viteCompression({
    algorithm: 'gzip',
    ext: '.gz',
    threshold: 10240, // Only compress files > 10KB
    deleteOriginFile: false,
  }),
  // Brotli compression for production (better than gzip)
  viteCompression({
    algorithm: 'brotliCompress',
    ext: '.br',
    threshold: 10240,
    deleteOriginFile: false,
  }),
  // Bundle analyzer (generates stats.html)
  visualizer({
    filename: './dist/stats.html',
    open: false,
    gzipSize: true,
    brotliSize: true,
  }),
];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Advanced code splitting for optimal caching and performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Group all other node_modules into vendor chunk
            return 'vendor';
          }
          // Split large sections into separate chunks
          if (id.includes('/components/sections/')) {
            const sectionName = id.split('/sections/')[1]?.split('.')[0];
            if (sectionName) {
              return `section-${sectionName.toLowerCase()}`;
            }
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 500,
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
