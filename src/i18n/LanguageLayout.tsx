import { Outlet } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { useEffect } from "react";

const DirectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isRtl, lang } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [isRtl, lang]);

  return <>{children}</>;
};

const LanguageLayout = () => {
  return (
    <LanguageProvider>
      <DirectionWrapper>
        <Outlet />
      </DirectionWrapper>
    </LanguageProvider>
  );
};

export default LanguageLayout;
