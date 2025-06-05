import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // Add or modify the ssr section like this:
  ssr: {
    // Add swiper and its related imports here
    noExternal: [
      "swiper",
      "swiper/vue",
      "swiper/modules",
      "swiper/css",
      "swiper/css/pagination",
      "swiper/css/navigation",
    ],
  },
  // ... potentially other configurations like resolve.alias etc.
});
