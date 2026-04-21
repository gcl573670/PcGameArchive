import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllPosts, categories } from "@/utils/postLoader";
import type { Post } from "@/types/post";
import { Search, X, Gamepad2 } from "lucide-react";

const SearchBar = () => {
  const { lang, langPrefix, t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Load all posts when component mounts or language changes
  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      try {
        const posts = await getAllPosts(lang);
        setAllPosts(posts);
      } catch (error) {
        console.error("Failed to load posts for search:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [lang]);

  const q = query.toLowerCase().trim();

  const results = q.length >= 2 && !loading
    ? allPosts.filter(
        (p) =>
          p.frontmatter.title.toLowerCase().includes(q) ||
          p.frontmatter.description.toLowerCase().includes(q) ||
          p.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(q))
      ).slice(0, 8)
    : [];

  const matchingCategories = q.length >= 2
    ? categories.filter(
        (c) => c.name.toLowerCase().includes(q) || c.slug.includes(q)
      ).slice(0, 4)
    : [];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (path: string) => {
    setQuery("");
    setOpen(false);
    navigate(path);
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger button */}
      {!open ? (
        <button
          onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
          className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search games…</span>
          <kbd className="ml-2 hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground sm:inline">
            ⌘K
          </kbd>
        </button>
      ) : (
        <div className="flex h-9 items-center gap-2 rounded-lg border border-primary bg-muted/80 px-3 w-64 sm:w-80">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games…"
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button onClick={() => { setQuery(""); setOpen(false); }} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Dropdown results */}
      {open && q.length >= 2 && (
        <div className="absolute right-0 top-11 z-50 w-80 sm:w-96 rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
          {/* Categories section */}
          {matchingCategories.length > 0 && (
            <div className="border-b border-border px-3 py-2">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Categories</p>
              {matchingCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleSelect(`${langPrefix}/${cat.slug}`)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <Gamepad2 className="h-3.5 w-3.5 text-primary" />
                  {t.nav[cat.slug as keyof typeof t.nav] || cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Games section */}
          {loading ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              Loading games...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-72 overflow-y-auto px-3 py-2">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Games</p>
              {results.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => handleSelect(`${langPrefix}/game/${post.slug}`)}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-secondary transition-colors"
                >
                  {post.frontmatter.image && (
                    <img src={post.frontmatter.image} alt="" className="h-10 w-10 rounded-md object-cover border border-border" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{post.frontmatter.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t.nav[post.frontmatter.category as keyof typeof t.nav] || post.frontmatter.category}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;