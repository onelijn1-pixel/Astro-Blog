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
  },
  integrations: [vue()],
  adapter: vercel({
    // edge: false, // nếu bạn muốn dùng Serverless Function thay vì Edge Function
  }),
});
