// Dependencies
import path from 'path'

// Configuration
import { defineConfig } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// Custom Configuration
export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
  },
  plugins: [vue(), glsl()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@@': path.join(__dirname),
    },
  },
  envPrefix: 'VUE_',
  publicDir: path.resolve(__dirname, 'public'),
})
