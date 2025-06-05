import { defineStore } from "pinia";
export type SupportedLocale = "en" | "ar";

interface LocalizationState {
  currentLocale: SupportedLocale;
}

export const useLocalizationStore = defineStore("localization", {
  state: (): LocalizationState => {
    const cookieLocale = useCookie<SupportedLocale>("locale");
    return {
      currentLocale: cookieLocale.value || "en",
    };
  },

  actions: {
    setCurrentLocale(locale: SupportedLocale) {
      this.currentLocale = locale;
      const localeCookie = useCookie<SupportedLocale>("locale");
      localeCookie.value = locale;
    },
  },

  getters: {
    getCurrentLocale: (state): SupportedLocale => state.currentLocale,
  },
});
