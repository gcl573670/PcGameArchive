import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getBlogPostBySlug } from "@/utils/postLoader";
import type { BlogPost } from "@/utils/postLoader";
import PostContentRenderer from "@/components/post/PostContentRenderer";
import AdSlot from "@/components/AdSlot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPostPage = () => {
  const { slug } = useParams();
  const { langPrefix, lang, t } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        const found = await getBlogPostBySlug(slug, lang);
        setPost(found);
      } catch (error) {
        console.error("Failed to load blog post:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug, lang]);

  // Manual SEO Update
  useEffect(() => {
    if (!post) return;
    
    const { frontmatter } = post;
    const url = `https://pcgamearchive.com/${lang}/blog/${slug}`;
    
    document.title = `${frontmatter.title} - PcGameArchive Blog`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", frontmatter.description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", frontmatter.description);
      document.head.appendChild(metaDescription);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", frontmatter.description);
    } else {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", frontmatter.description);
      document.head.appendChild(ogDescription);
    }
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", frontmatter.description);
    } else {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      twitterDescription.setAttribute("content", frontmatter.description);
      document.head.appendChild(twitterDescription);
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", frontmatter.title);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", frontmatter.title);
      document.head.appendChild(ogTitle);
    }
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", frontmatter.title);
    } else {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      twitterTitle.setAttribute("content", frontmatter.title);
      document.head.appendChild(twitterTitle);
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", url);
      document.head.appendChild(canonical);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    } else {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", url);
      document.head.appendChild(ogUrl);
    }
    
    if (frontmatter.image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute("content", frontmatter.image);
      } else {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        ogImage.setAttribute("content", frontmatter.image);
        document.head.appendChild(ogImage);
      }
      
      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute("content", frontmatter.image);
      } else {
        twitterImage = document.createElement("meta");
        twitterImage.setAttribute("name", "twitter:image");
        twitterImage.setAttribute("content", frontmatter.image);
        document.head.appendChild(twitterImage);
      }
    }
    
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      twitterCard.setAttribute("content", "summary_large_image");
      document.head.appendChild(twitterCard);
    }
    
    if (frontmatter.tags && frontmatter.tags.length > 0) {
      let keywords = document.querySelector('meta[name="keywords"]');
      const keywordsContent = frontmatter.tags.join(", ");
      if (keywords) {
        keywords.setAttribute("content", keywordsContent);
      } else {
        keywords = document.createElement("meta");
        keywords.setAttribute("name", "keywords");
        keywords.setAttribute("content", keywordsContent);
        document.head.appendChild(keywords);
      }
    }
  }, [post, slug, lang]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Blog post not found</h1>
          <Link to={`${langPrefix}/blog`} className="mt-4 inline-block text-primary hover:underline">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { frontmatter, content } = post;

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header with image */}
        {frontmatter.image && (
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {frontmatter.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-4 border-b border-border">
          {frontmatter.author && (
            <span>By {frontmatter.author}</span>
          )}
          <span>{frontmatter.date}</span>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-secondary rounded-md text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Ad Slot - Responsive: Leaderboard on desktop, Rectangle on mobile */}
        {/* Desktop: 728x90, Mobile: 300x250 */}
        <div className="my-6 flex justify-center">
          {/* Desktop ad (728x90) - hidden on mobile */}
          <div className="hidden md:block">
            <AdSlot type="leaderboard" className="my-4" />
          </div>
          {/* Mobile ad (300x250) - visible only on mobile */}
          <div className="block md:hidden">
            <AdSlot type="rectangle" className="my-4" />
          </div>
        </div>

        {/* Content with markdown rendering */}
        <div className="prose prose-invert max-w-none">
          <PostContentRenderer content={content} />
        </div>

        {/* Ad Slot - Bottom: Leaderboard on desktop, Rectangle on mobile */}
        <div className="my-8 flex justify-center">
          <div className="hidden md:block">
            <AdSlot type="leaderboard" className="my-4" />
          </div>
          <div className="block md:hidden">
            <AdSlot type="rectangle" className="my-4" />
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to={`${langPrefix}/blog`}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
