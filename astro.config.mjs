import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://EstickSB.github.io',
  build: {
    format: 'file'
  },
  integrations: [
    react(),
    tailwind()
  ]
});