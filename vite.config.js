import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
 base: '/enazita/',
 build: {
 rollupOptions: {
 input: {
 main: resolve(__dirname, 'index.html'),
 about: resolve(__dirname, 'about.html'),
 projects: resolve(__dirname, 'projects.html'),
 },
 },
 },
})
