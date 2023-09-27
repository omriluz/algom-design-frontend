// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    appType: 'mpa',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                villa: resolve(__dirname, 'villa/index.html'),
                office: resolve(__dirname, 'office/index.html'),
                tama: resolve(__dirname, 'tama/index.html'),
                article: resolve(__dirname, 'article/index.html')
            },
        },
    }
})