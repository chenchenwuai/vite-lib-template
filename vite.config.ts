import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'LibraryName', // 库名称
      formats: ['es', 'cjs', 'umd'],
      // the proper extensions will be added
      fileName: 'library-name' // 库名称
    }
  }
})
