// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.karunalaw.ca",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
