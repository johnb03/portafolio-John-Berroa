import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://johnb03.github.io',
  base: '/portafolio-John-Berroa',
});