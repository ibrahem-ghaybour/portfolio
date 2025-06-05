// ~/stores/theme.ts
import { defineStore } from "pinia";

export type Theme = "light" | "dark";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light" as Theme,
  }),

  actions: {
    init() {
      const themeCookie = useCookie<Theme>("theme");
      this.theme = themeCookie.value || "light";
    },
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
});
