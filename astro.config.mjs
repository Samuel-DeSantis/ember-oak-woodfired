import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  //site: 'https://emberandoakwoodfired.netlify.app/', // ← swap per client
  integrations: [tailwind()],
  //output: 'static',
});
