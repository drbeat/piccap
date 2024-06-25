import path from 'node:path';
import legacy from '@vitejs/plugin-legacy'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig, normalizePath } from 'vite'

export default defineConfig({
    base: './',
  plugins: [
    viteStaticCopy({
        targets: [
          {
            src: './frontend/public/*',
            dest: '.',
          }
        ]
      }),
    legacy({
        targets: ['chrome 38'],
    }),
  ],
  build: {
    rollupOptions: {
        input: [
            normalizePath(path.resolve(__dirname, './frontend/src/index.js')),
        ],
            output: {
            entryFileNames: '[name].js',
        },
    },
    outDir: normalizePath(path.resolve(__dirname, './build/piccap-frontend/')),
  },
})