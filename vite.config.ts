import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
        output: {
            minifyInternalExports: false
        }
    }
  },
  plugins: [
    vue(),
    federation({
      name: 'prueba-app',
      remotes: {
        'Microfrontend-vue2': {
          external: `Promise.resolve('http://localhost:5005/assets/Microfrontend-vue2.js')`,
          externalType: "promise"
        },
        'Microfrontend-vue3': {
          external: `Promise.resolve('http://localhost:5006/assets/Microfrontend-vue3.js')`,
          externalType: "promise"
        },
      },
      shared: {
        vue:{},
        vuex: {},
      }
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
