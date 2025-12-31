import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.karunalaw.ca",
  base: "/", // Add this line for custom domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
