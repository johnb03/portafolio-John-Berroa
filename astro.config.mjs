import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: 'https://johnb03.github.io',
  // Dev corre en la raíz (evita el error de public/ sin base del navegador);
  // build/preview mantiene el base para GitHub Pages.
  base: import.meta.env.PROD ? '/portafolio-John-Berroa' : '/',
});