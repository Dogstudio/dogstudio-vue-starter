// Dependencies
import path from 'path'

// Configuration
import { defineConfig, loadEnv } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// Custom Configuration
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    root: path.join(__dirname, 'src'),
    build: {
      outDir: path.join(__dirname, 'dist'),
    },
    server: {
      port: process.env.VITE_SERVER_PORT || 3000,
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
}
