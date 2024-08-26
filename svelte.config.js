import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true,
    }),
    // github pages 設定時に変更
    // paths: {
    // 	base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    // }
  },
};

export default config;
