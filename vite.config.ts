import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve as pathResolve } from 'path'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  // host:true, // 表示可以通过 ip 进行访问
  resolve: {
    alias: {
      '@': pathResolve(__dirname, 'src'),
      '@C': pathResolve(__dirname, 'src/components'),
      '@A': pathResolve(__dirname, 'src/assets'),
      '@P': pathResolve(__dirname, 'src/pages')
    }
  },
  server: {
    port: 7788,
    proxy: {
      '^/api/.*': {
        target: 'https://yourserver.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: './src/global/auto-imports.d.ts',
      imports: ['vue', 'vue-router']
      // eslintrc: {
      //   enabled: true
      // }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: './src/global/components.d.ts'
    })
  ]
})
