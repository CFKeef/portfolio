import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), mdx(), UnoCSS({
    injectReset: true
  })],
  output: "server",
  adapter: vercel()
});