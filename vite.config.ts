import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { crx, defineManifest } from '@crxjs/vite-plugin'
import tsConfigPaths from 'vite-tsconfig-paths'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Mochi',
  version: process.env.npm_package_version,
  description: 'Useful toolkit for academic survey as browser extension',
  homepage_url: 'https://github.com/nandenjin/mochi',
  minimum_chrome_version: '89',
  icons: {
    128: 'src/assets/icons/icon_128.png',
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['chrome89', 'edge89', 'firefox89'],
  },
  plugins: [tsConfigPaths(), react(), crx({ manifest })],
})
