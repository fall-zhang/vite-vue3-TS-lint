import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve as pathResolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // host:true, // 表示可以通过 ip 进行访问
  resolve: {
    alias: {
      '@': pathResolve(__dirname, 'src'),
      '@C': pathResolve(__dirname, 'src/components'),
      '@V': pathResolve(__dirname, 'src/views')
    }
  },
  plugins: [
    vue(),
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
