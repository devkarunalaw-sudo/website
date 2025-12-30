// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://devkarunalaw-sudo.github.io",
  base: "/website/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
