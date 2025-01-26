import { createContext, useContext, useEffect, useState } from "react";
import en from "../i18n/dictionaries/en.json";
import de from "../i18n/dictionaries/de.json";
import fr from "../i18n/dictionaries/fr.json";
import pt from "../i18n/dictionaries/pt.json";

type Language = "en" | "fr" | "de" | "pt";
type Translations = Record<Language, Record<string, string>>;

const translations: Translations = {
  en,
  fr,
  de,
  pt,
};

export const languages = Object.keys(translations) as Language[];

interface I18nContextType {
  t: (key: string) => string;
  lang: Language;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType>(null!);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const handleLanguageChange = (newLang: Language) => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", newLang);
    window.history.pushState({}, "", `?${params.toString()}`);
    setLang(newLang);
  };

  useEffect(() => {
    const handleLangChange = () => {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as Language;

      if (urlLang && translations[urlLang]) {
        setLang(urlLang);
      }
    };

    handleLangChange();
    window.addEventListener("popstate", handleLangChange);
    return () => window.removeEventListener("popstate", handleLangChange);
  }, []);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <I18nContext.Provider value={{ t, lang, setLang: handleLanguageChange }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useTranslation = () => useContext(I18nContext);
