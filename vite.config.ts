import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
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
      '@vueuse/core',
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
  ), ReactivityTransform()],
})
