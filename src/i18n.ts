import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        item: "Item",
        language: "language",
        email: "email",
        note: "note",
        confirm: "confirm"
      }
    },
    fr: {
      translations: {
        item: "Materiel",
        language: "langue",
        email: "mail",
        note: "note",
        confirm: "confirmer"
      }
    },
    es: {
      translations: {
        item: "material",
        language: "idioma",
        email: "correo",
        note: "nota",
        confirm: "confirmar"
      }
    }
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: false
  }
});

export default i18n;
