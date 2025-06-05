// plugins/i18n.ts
import { createI18n } from "vue-i18n";
import en from "~/locales/en.json";
import ar from "~/locales/ar.json";

export default defineNuxtPlugin((nuxtApp) => {
  // 1. Grab (or create) our locale cookie; default must be a function
  const localeCookie = useCookie<"en" | "ar">("locale", {
    default: () => "en",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  // 2. Resolve initial locale
  let initialLocale = localeCookie.value!;
  if (typeof window !== "undefined" && !localeCookie.value) {
    // only runs if cookie truly unset (on client)
    initialLocale = navigator.language.startsWith("ar") ? "ar" : "en";
    localeCookie.value = initialLocale;
  }

  // 3. Create vue-i18n
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: initialLocale,
    fallbackLocale: "en",
    messages: { en, ar },
  });
  nuxtApp.vueApp.use(i18n);

  // 4. Emit correct <html> attrs during SSR/hydration
  useHead({
    htmlAttrs: {
      lang: initialLocale,
      dir: initialLocale === "ar" ? "rtl" : "ltr",
    },
  });

  // 5. Watch cookie on client to update both i18n and DOM
  if (typeof window !== "undefined") {
    watch(
      () => localeCookie.value,
      (newLocale) => {
        if (!newLocale) return;
        i18n.global.locale.value = newLocale;
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
      },
    );
  }

  // 6. Provide a helper to switch locale
  return {
    provide: {
      setLocale: (loc: "en" | "ar") => {
        localeCookie.value = loc;
      },
    },
  };
});
