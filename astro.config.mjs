import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://EstickSB.github.io',
  base: '/Limpieza-y-Organizacion-de-Texto-Online/',
  build: {
    format: 'file'
  },
  integrations: [
    react(),
    tailwind()
  ]
});