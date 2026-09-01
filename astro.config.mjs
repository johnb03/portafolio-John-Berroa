import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriBaseImage } from './src/satteri-base-image.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: 'https://johnb03.github.io',
  // Dev corre en la raíz (evita el error de public/ sin base del navegador);
  // build/preview mantiene el base para GitHub Pages.
  base: import.meta.env.PROD ? '/portafolio-John-Berroa' : '/',
  markdown: {
    // Antepone la base a las imágenes root-absolutas que escribe Decap (/images/...)
    // en el pipeline Sätteri (los plugins remark legacy no corren en collections).
    processor: satteri({
      mdastPlugins: [satteriBaseImage(import.meta.env.PROD ? '/portafolio-John-Berroa' : '/')],
    }),
  },
});