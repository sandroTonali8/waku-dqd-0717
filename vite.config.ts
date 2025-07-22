import { defineConfig } from 'vite'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// 先定位到 date-fns-tz 包目录，然后拼出 esm/index.js 的真实路径
const pkgPath = require.resolve('date-fns-tz/package.json')
const dateFnsTzDir = path.dirname(pkgPath)
const dateFnsTzEsm = path.join(dateFnsTzDir, 'esm', 'index.js')

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^date-fns-tz$/,
        replacement: dateFnsTzEsm
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  optimizeDeps: {
    include: [
      'react-dom',
      dateFnsTzEsm,
      '@douyinfe/semi-ui',
      '@douyinfe/semi-foundation',
      '@douyinfe/semi-icons'
    ]
  },
  ssr: {
    noExternal: [
      'react-dom',
      dateFnsTzEsm,
      '@douyinfe/semi-ui',
      '@douyinfe/semi-foundation',
      '@douyinfe/semi-icons'
    ]
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules\/date-fns-tz(\/|$)/,
        /node_modules\/@douyinfe\/semi-foundation(\/|$)/
      ],
      transformMixedEsModules: true
    }
  },
  server: {
    proxy: {
      '/api/football': {
        target: 'https://api.football-data.org/v4',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/api\/football/, '')
      }
    }
  }
})
