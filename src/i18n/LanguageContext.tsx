import { createContext, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { translations, supportedLanguages, defaultLanguage, isRtl, type Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  t: (typeof translations)[Language];
  isRtl: boolean;
  langPrefix: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLanguage,
  t: translations[defaultLanguage],
  isRtl: false,
  langPrefix: `/${defaultLanguage}`,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();

  const lang = useMemo(() => {
    if (paramLang && supportedLanguages.includes(paramLang as Language)) {
      return paramLang as Language;
    }
    return defaultLanguage;
  }, [paramLang]);

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      isRtl: isRtl(lang),
      langPrefix: `/${lang}`,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
