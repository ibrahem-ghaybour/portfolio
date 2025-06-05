// ~/plugins/theme.ts
import { watch } from "vue";
import { useThemeStore } from "~/stores/theme";

export default defineNuxtPlugin(() => {
  const themeStore = useThemeStore();

  // 1. Initialize store from cookie (server + client)
  const themeCookie = useCookie<"light" | "dark">("theme", {
    default: () => "dark",
    maxAge: 60 * 60 * 24 * 365,
  });
  themeStore.theme = themeCookie.value;

  // 2. Always merge your htmlAttrs!
  useHead(() => ({
    htmlAttrs: {
      class: themeStore.theme === "dark" ? "dark-theme" : "",
    },
  }));

  // 3. Keep the cookie in sync when you toggle
  watch(
    () => themeStore.theme,
    (val) => {
      themeCookie.value = val;
    }
  );
});
