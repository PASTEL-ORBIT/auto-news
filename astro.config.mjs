import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pastel-orbit.github.io',
  base: '/auto-news/',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
