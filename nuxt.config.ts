import tsconfigPaths from "vite-tsconfig-paths";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  srcDir: "src",
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@pinia/nuxt"], // 👈 أضف Pinia هنا إذا لم تكن فعلتها
  vite: {
    plugins: [tsconfigPaths()],
  },
});
