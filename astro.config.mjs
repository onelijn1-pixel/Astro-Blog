// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@splidejs/vue-splide']
    }
  },
  integrations: [vue()],
  adapter: vercel({
  }),
});
