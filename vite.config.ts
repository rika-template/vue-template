import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), AutoImport({
    imports: [
      'vue',
    ],
    dts: 'src/auto-imports.d.ts',
    dirs: [
      'src/stores',
    ],
    vueTemplate: true,
    resolvers: [ElementPlusResolver()],
  }), Components({
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: 'src/components.d.ts',
    resolvers: [ElementPlusResolver()],
  }), vueDevTools(
    // 根据需求修改
    { launchEditor: 'webstorm' },
  )],
})
