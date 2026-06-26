import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllPosts, categories } from "@/utils/postLoader";
import type { Post } from "@/types/post";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import HeroCarousel from "@/components/HeroCarousel";
import { TrendingUp, Clock, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 20;

const Index = () => {
  const { t, langPrefix, lang } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  // Load posts asynchronously
  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts(lang);
        setPosts(allPosts);
        
        // Get random popular posts (5 random posts from all posts)
        const shuffled = [...allPosts];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setPopularPosts(shuffled.slice(0, 5));
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [lang]);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.frontmatter.category === activeCategory)
    : posts;

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;
  
  const recentPosts = posts.slice(0, 5);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <div className="h-[400px] md:h-[480px] bg-card animate-pulse" />
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="min-w-0 flex-1">
              <div className="mb-8 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-9 w-20 rounded-lg bg-card animate-pulse" />
                ))}
              </div>
              <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="aspect-[2/3] rounded-lg bg-card animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>PcGameArchive — Free PC Game Downloads</title>
        <meta name="description" content={t.hero.subtitle} />
        <link rel="canonical" href={`https://pcgamearchive.com/${lang}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pcgamearchive — Free PC Game Downloads" />
        <meta property="og:description" content={t.hero.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pcgamearchive.com/${lang}`} />
        <meta property="og:image" content="https://pcgamearchive.com/og-default.jpg" />
        <meta property="og:site_name" content="Pcgamearchive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pcgamearchive" />
        <meta name="twitter:title" content="Pcgamearchive — Free PC Game Downloads" />
        <meta name="twitter:description" content={t.hero.subtitle} />
        <meta name="twitter:image" content="https://pcgamearchive.com/og-default.jpg" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Carousel */}
        <HeroCarousel posts={posts} />

        {/* Main content with sidebar */}
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex gap-8">
            {/* Main content */}
            <div className="min-w-0 flex-1">
              {/* H1 Header for Home Page - Hidden */}
              <h1 style={{ display: 'none' }}>PcGameArchive — Free PC Game Downloads</h1>

              {/* Category filter */}
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => { setActiveCategory(null); setVisibleCount(POSTS_PER_PAGE); }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === null
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/.3)]"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => { setActiveCategory(cat.slug); setVisibleCount(POSTS_PER_PAGE); }}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === cat.slug
                        ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/.3)]"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    {t.nav[cat.slug as keyof typeof t.nav] || cat.name}
                  </button>
                ))}
              </div>

              {/* Latest Games heading */}
              <h2 className="mb-6 text-2xl font-bold text-foreground">{t.common.latestPicks}</h2>

              {/* Games grid */}
              <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 2000px' }}>
                {visiblePosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <p className="py-12 text-center text-muted-foreground">No games found in this category.</p>
              )}

              {hasMore && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/.2)]"
                  >
                    {t.common.loadMore}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden w-72 shrink-0 xl:block">
              {/* Popular Games - Random */}
              <div className="mb-8 rounded-xl border border-border bg-card p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {t.common.popularGames}
                </h3>
                <ul className="space-y-3">
                  {popularPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`${langPrefix}/game/${post.slug}`}
                        className="group flex items-center gap-3"
                      >
                        {post.frontmatter.image && (
                          <img
                            src={post.frontmatter.image}
                            alt={post.frontmatter.title}
                            className="h-12 w-12 rounded-lg object-cover"
                            loading="lazy"
                            width="48"
                            height="48"
                          />
                        )}
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.frontmatter.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Games */}
              <div className="mb-8 rounded-xl border border-border bg-card p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  <Clock className="h-4 w-4" />
                  {t.common.recentGames}
                </h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`${langPrefix}/game/${post.slug}`}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3 w-3 text-primary/50" />
                        <span className="line-clamp-1">{post.frontmatter.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Ad Slot - Skyscraper (160x600) */}
              <div className="rounded-xl border border-border bg-card overflow-hidden flex justify-center">
                <AdSlot type="skyscraper" className="my-4" />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
