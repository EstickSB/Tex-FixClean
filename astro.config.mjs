import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/EstickSB',
  base: '/Limpieza-y-Organizacion-de-Texto-Online',
  integrations: [
    react(),
    tailwind()
  ]
});