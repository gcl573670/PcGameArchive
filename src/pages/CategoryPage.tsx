import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPostsByCategory, categories, getSeoCategoryName, getSeoCategoryDescription } from "@/utils/postLoader";
import type { Post } from "@/types/post";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 49;

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { t, langPrefix, lang } = useLanguage();
  const cat = categories.find((c) => c.slug === category);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    async function loadPosts() {
      if (!category) {
        setLoading(false);
        return;
      }
      try {
        const posts = await getPostsByCategory(lang, category);
        setAllPosts(posts);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [category, lang]);

  // Manual SEO Update with multi-language support (without breaking existing code)
  useEffect(() => {
    if (!cat) return;
    
    // Get SEO-optimized names and descriptions (uses new helper functions)
    const categoryName = getSeoCategoryName(cat.slug, lang);
    let categoryDescription = getSeoCategoryDescription(cat.slug, lang);
    
    // Ensure description is optimal length for SEO (120-160 characters)
    if (categoryDescription.length > 160) {
      categoryDescription = categoryDescription.substring(0, 157) + "...";
    }
    
    const url = `https://pcgamearchive.com/${lang}/${cat.slug}`;
    const fullTitle = `${categoryName} - Download Free PC Games | PcGameArchive`;
    
    // Update document title
    document.title = fullTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", categoryDescription);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", categoryDescription);
      document.head.appendChild(metaDescription);
    }
    
    // Update OG description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", categoryDescription);
    } else {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", categoryDescription);
      document.head.appendChild(ogDescription);
    }
    
    // Update Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", categoryDescription);
    } else {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      twitterDescription.setAttribute("content", categoryDescription);
      document.head.appendChild(twitterDescription);
    }
    
    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", fullTitle);
      document.head.appendChild(ogTitle);
    }
    
    // Update Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", fullTitle);
    } else {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      twitterTitle.setAttribute("content", fullTitle);
      document.head.appendChild(twitterTitle);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", url);
      document.head.appendChild(canonical);
    }

    // ROBOTS META TAG
    let robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute("content", "index, follow");
    } else {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("content", "index, follow");
      document.head.appendChild(robots);
    }
    
    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    } else {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", url);
      document.head.appendChild(ogUrl);
    }
    
    // Update OG type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "website");
    } else {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      ogType.setAttribute("content", "website");
      document.head.appendChild(ogType);
    }
    
    // Update OG site name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      ogSiteName.setAttribute("content", "TempoBet");
    } else {
      ogSiteName = document.createElement("meta");
      ogSiteName.setAttribute("property", "og:site_name");
      ogSiteName.setAttribute("content", "TempoBet");
      document.head.appendChild(ogSiteName);
    }
    
    // Update OG image
    const categoryImage = "https://pcgamearchive.com/og-default.jpg";
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", categoryImage);
    } else {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      ogImage.setAttribute("content", categoryImage);
      document.head.appendChild(ogImage);
    }
    
    // Update Twitter card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      twitterCard.setAttribute("content", "summary_large_image");
      document.head.appendChild(twitterCard);
    }
    
    // Update Twitter site
    let twitterSite = document.querySelector('meta[name="twitter:site"]');
    if (twitterSite) {
      twitterSite.setAttribute("content", "@pcgamearchive");
    } else {
      twitterSite = document.createElement("meta");
      twitterSite.setAttribute("name", "twitter:site");
      twitterSite.setAttribute("content", "@pcgamearchive");
      document.head.appendChild(twitterSite);
    }
    
    // Update Twitter image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", categoryImage);
    } else {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      twitterImage.setAttribute("content", categoryImage);
      document.head.appendChild(twitterImage);
    }
  }, [cat, lang]);

  if (!cat) {
    return (
      <>
        <Header />
        <main className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">{t.common.categoryNotFound}</h1>
        </main>
        <Footer />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading {cat.name} games...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const visiblePosts = allPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allPosts.length;

  return (
    <>
      <Header />
      <main>
        <HeroCarousel posts={allPosts} maxSlides={3} />
        <section className="container mx-auto max-w-7xl px-4 py-12">
          <h1 className="mb-6 text-2xl font-bold text-foreground">
            {t.nav[cat.slug as keyof typeof t.nav] || cat.name}
          </h1>
          {allPosts.length === 0 ? (
            <p className="text-muted-foreground">No games in this category yet.</p>
          ) : (
            <>
              <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
                {visiblePosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
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
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
