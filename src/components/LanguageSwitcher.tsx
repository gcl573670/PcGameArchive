import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { supportedLanguages, languageNames, type Language } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = (newLang: Language) => {
    const pathParts = location.pathname.split("/");
    // Replace the language segment (index 1)
    if (supportedLanguages.includes(pathParts[1] as Language)) {
      pathParts[1] = newLang;
    } else {
      pathParts.splice(1, 0, newLang);
    }
    navigate(pathParts.join("/") || `/${newLang}`);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{lang}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-full z-50 mt-1 max-h-96 w-48 overflow-y-auto rounded-lg border border-border bg-card p-1 shadow-lg custom-scrollbar">
          {supportedLanguages.map((l) => (
            <button
              key={l}
              onClick={() => switchLanguage(l)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                l === lang ? "font-bold text-primary" : "text-foreground"
              }`}
            >
              <span className="uppercase w-6 text-xs text-muted-foreground">{l}</span>
              {languageNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;