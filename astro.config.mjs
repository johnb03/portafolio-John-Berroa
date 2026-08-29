import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://johnb03.github.io',
  // Dev corre en la raíz (evita el error de public/ sin base del navegador);
  // build/preview mantiene el base para GitHub Pages.
  base: import.meta.env.PROD ? '/portafolio-John-Berroa' : '/',
});