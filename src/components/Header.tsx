import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories } from "@/utils/postLoader";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchBar from "@/components/SearchBar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { t, langPrefix } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    ...categories.map((cat) => ({
      slug: cat.slug,
      label: t.nav[cat.slug as keyof typeof t.nav] || cat.name,
      to: `${langPrefix}/${cat.slug}`,
    })),
    { slug: "blog", label: "Blog", to: `${langPrefix}/blog` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to={langPrefix} className="flex items-center">
          <img 
            src="https://pub-c17bac2473334bf1a31be4c8877715fc.r2.dev/logos/pcgamearchive2.png"
            alt="PcGameArchive"
            className="h-10 w-auto"
            width="200"
            height="40"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchBar />
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
