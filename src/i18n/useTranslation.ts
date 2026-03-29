import { useLanguage } from "./LanguageContext";
import { translations, Language } from "./translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (obj: Record<Language, string> | { en: string; it: string; es: string }): string => {
    return obj[language] || obj.en;
  };

  return { t, language, translations };
};
