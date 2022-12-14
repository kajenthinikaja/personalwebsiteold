import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslations from "./locales/english.json";
import tamilTranslations from "./locales/tamil.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: englishTranslations },
    ta: { translation: tamilTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
