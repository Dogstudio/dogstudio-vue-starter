// Dependencies
import path from 'path'

// Configuration
import { defineConfig, loadEnv } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// Custom Configuration
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    root: path.join(__dirname, 'src'),
    build: {
      outDir: path.join(__dirname, 'dist'),
    },
    server: {
      port: process.env.VITE_SERVER_PORT || 3000,
    },
    // See: https://stackoverflow.com/a/71252262
    define: {
      __VUE_I18N_LEGACY_API__: false,
      __VUE_I18N_FULL_INSTALL__: true,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    plugins: [vue(), glsl()],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@@': path.join(__dirname),
      },
    },
    envDir: process.cwd(),
    envPrefix: 'VUE_',
    publicDir: path.resolve(__dirname, 'public'),
  }
})
