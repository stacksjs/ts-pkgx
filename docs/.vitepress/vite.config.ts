import { resolve } from 'node:path'
// import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        // Disable manual chunks to avoid VitePress module resolution issues
        // manualChunks: (id) => {
        //   if (id.includes('node_modules')) {
        //     if (id.includes('vue')) {
        //       return 'vue-vendor'
        //     }
        //     if (id.includes('vitepress')) {
        //       return 'vitepress-vendor'
        //     }
        //     return 'vendor'
        //   }
        // },
      },
      // Optimize memory usage during build
      maxParallelFileOps: 1, // Further reduce parallel operations to conserve memory
    },
  },

  resolve: {
    dedupe: [
      'vue',
      '@vue/runtime-core',
    ],
    alias: {
      // Fix mark.js module resolution by using a custom wrapper
      'mark.js/src/vanilla.js': resolve(__dirname, 'mark-wrapper.js'),
    },
  },

  plugins: [
    // custom
    // MarkdownTransform(),
    // Contributors(contributions),

    // plugins
    Components({
      dirs: resolve(__dirname, 'theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: resolve(__dirname, 'components.d.ts'),
      transformer: 'vue3',
    }),

    Icons({
      compiler: 'vue3',
      defaultStyle: 'display: inline-block',
    }),

    UnoCSS(resolve(__dirname, 'unocss.config.ts')),

    // Inspect(),
  ],

  optimizeDeps: {
    exclude: [
      // 'vue',
      'body-scroll-lock',
    ],
    include: [
      'mark.js',
    ],
  },
})
