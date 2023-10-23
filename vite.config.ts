import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { parse } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  plugins: [vue(), splitVendorChunkPlugin()],
  server: {
    proxy: {
        '/api': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
        vue: path.resolve(`./node_modules/vue`),
    }
  },
  build: {
    emptyOutDir: true,
  },
})
