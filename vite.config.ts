import path from 'node:path';
import legacy from '@vitejs/plugin-legacy'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig, normalizePath } from 'vite'

export default defineConfig({
  root: './frontend',
  publicDir: '../public',
  plugins: [
    viteStaticCopy({
        targets: [
          {
            src: './public/*',
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
            normalizePath(path.resolve(__dirname, './frontend/index.html')),
        ],
        output: {
            entryFileNames: 'js/[name].js',
        },
    },
    outDir: normalizePath(path.resolve(__dirname, './build/piccap-frontend/')),
    emptyOutDir: true,
  },
})