import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/EstickSB',
  base: '/Limpieza-de-Texto-Online',
  integrations: [
    react(),
    tailwind()
  ]
});