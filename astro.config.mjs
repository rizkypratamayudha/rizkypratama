import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rizkypratamayudha.github.io',
  integrations: [tailwind()],
  output: 'static',
});
