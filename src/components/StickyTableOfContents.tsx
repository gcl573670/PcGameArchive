import { useLanguage } from "@/i18n/LanguageContext";
import { extractHeadingsFromContent } from "@/utils/postLoader";
import { useEffect, useState } from "react";

interface StickyTableOfContentsProps {
  content: string;
}

const StickyTableOfContents = ({ content }: StickyTableOfContentsProps) => {
  const { t } = useLanguage();
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {t.common.tableOfContents}
      </h2>
      <ul className="space-y-1 border-s border-border ps-4">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ms-3" : ""}>
            <a
              href={`#${heading.id}`}
              className={`block text-xs leading-relaxed transition-colors hover:text-primary ${
                activeId === heading.id
                  ? "font-semibold text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyTableOfContents;
