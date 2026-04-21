import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPostBySlug, categories } from "@/utils/postLoader";
import type { Post } from "@/types/post";
import SchemaMarkup from "@/components/SchemaMarkup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostContentRenderer from "@/components/post/PostContentRenderer";
import ImageGallery from "@/components/post/ImageGallery";
import SocialShareButtons from "@/components/SocialShareButtons";
import AdSlot from "@/components/AdSlot";
import RelatedPosts from "@/components/RelatedPosts";
import { Download, Monitor, Cpu, HardDrive, Calendar, Tag, User, Building2 } from "lucide-react";

const PostPage = () => {
  const { slug } = useParams();
  const { langPrefix, lang, t } = useLanguage();
  
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function loadPost() {
      if (!slug) {
        if (isMounted) setError("No slug");
        if (isMounted) setLoading(false);
        return;
      }
      
      try {
        const found = await getPostBySlug(slug, lang);
        if (isMounted) setPost(found);
      } catch (err) {
        console.error("Error:", err);
        if (isMounted) setError(String(err));
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    
    loadPost();
    
    return () => {
      isMounted = false;
    };
  }, [slug, lang]);

  // Manual SEO Update
  useEffect(() => {
    if (!post) return;
    
    const { frontmatter } = post;
    const url = `https://pcgamearchive.com/${lang}/game/${slug}`;
    
    document.title = `${frontmatter.title} - Download Free`;
    
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
    
    let keywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = frontmatter.tags?.join(", ") || frontmatter.category;
    if (keywords) {
      keywords.setAttribute("content", keywordsContent);
    } else {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      keywords.setAttribute("content", keywordsContent);
      document.head.appendChild(keywords);
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

  if (error) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
            <Link to={langPrefix} className="mt-4 inline-block text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
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
          <h1 className="text-2xl font-bold text-foreground">{t.common.postNotFound}</h1>
          <Link to={langPrefix} className="mt-4 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { frontmatter, content } = post;
  const cat = categories.find((c) => c.slug === frontmatter.category);
  const url = `https://pcgamearchive.com/${lang}/game/${slug}`;

  return (
    <>
      <SchemaMarkup frontmatter={frontmatter} url={url} />
      <Header />
      <main>
        {/* Hero banner with game cover - Background effect */}
        <section className="relative overflow-hidden border-b border-border">
          {frontmatter.image && (
            <div className="absolute inset-0">
              <img 
                src={frontmatter.image} 
                alt="" 
                className="h-full w-full object-cover opacity-20 blur-sm" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
            </div>
          )}
          <div className="container relative mx-auto max-w-7xl px-4 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              {/* Game cover */}
              {frontmatter.image && (
                <div className="w-full shrink-0 md:w-72">
                  <img
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    className="w-full rounded-xl border border-border shadow-2xl"
                  />
                </div>
              )}

              {/* Game info */}
              <div className="flex-1">
                {/* Breadcrumbs */}
                <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Link to={langPrefix} className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  {cat && (
                    <>
                      <Link to={`${langPrefix}/${cat.slug}`} className="hover:text-primary transition-colors">
                        {t.nav[cat.slug as keyof typeof t.nav] || cat.name}
                      </Link>
                      <span>/</span>
                    </>
                  )}
                  <span className="text-foreground/70 truncate">{frontmatter.title}</span>
                </nav>

                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  {frontmatter.title}
                </h1>

                <p className="mb-6 text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {frontmatter.description}
                </p>

                {/* Game meta */}
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {frontmatter.developer && (
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4 text-primary/70" />
                      <span>{frontmatter.developer}</span>
                    </div>
                  )}
                  {frontmatter.publisher && (
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-primary/70" />
                      <span>{frontmatter.publisher}</span>
                    </div>
                  )}
                  {frontmatter.release_date && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      <span>{frontmatter.release_date}</span>
                    </div>
                  )}
                  {frontmatter.download_size && (
                    <div className="flex items-center gap-1.5">
                      <HardDrive className="h-4 w-4 text-primary/70" />
                      <span>{frontmatter.download_size}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* DOWNLOAD BUTTONS */}
                {frontmatter.download_links && frontmatter.download_links.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {frontmatter.download_links.map((dl, idx) => (
                      <a
                        key={idx}
                        href={`${langPrefix}/download?url=${encodeURIComponent(dl.url)}&game=${encodeURIComponent(frontmatter.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        <Download className="h-5 w-5" />
                        {dl.label}{dl.size ? ` (${dl.size})` : ""}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={`${langPrefix}/download?url=${encodeURIComponent(frontmatter.download_url || "#")}&game=${encodeURIComponent(frontmatter.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    <Download className="h-5 w-5" />
                    {t.common.downloadNow}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content area */}
        <article className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex gap-10">
            {/* Main content */}
            <div className="min-w-0 flex-1">
              {/* Trailer video */}
              {frontmatter.trailer_video_id && (
                <div className="mb-10">
                  <h2 className="mb-4 text-xl font-bold text-foreground">Trailer</h2>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${frontmatter.trailer_video_id}`}
                        title={`${frontmatter.title} Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Game description content */}
              <PostContentRenderer content={content} />

              {/* Screenshots */}
              {frontmatter.screenshots && frontmatter.screenshots.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-4 text-xl font-bold text-foreground">{t.common.screenshots}</h2>
                  <ImageGallery images={frontmatter.screenshots.map((src) => ({ src, alt: frontmatter.title }))} />
                </div>
              )}

              {/* System Requirements */}
              {frontmatter.system_requirements && (
                <div className="mt-10">
                  <h2 className="mb-4 text-xl font-bold text-foreground">{t.common.systemRequirements}</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Minimum */}
                    {frontmatter.system_requirements.minimum && Object.keys(frontmatter.system_requirements.minimum).length > 0 && (
                      <div className="rounded-xl border border-border bg-card p-5">
                        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          <Monitor className="h-4 w-4 text-primary" />
                          {t.common.minimum}
                        </h3>
                        <dl className="space-y-3">
                          {Object.entries(frontmatter.system_requirements.minimum).map(([key, value]) => (
                            <div key={key}>
                              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{key}</dt>
                              <dd className="text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{value as string}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                    
                    {/* Recommended */}
                    {frontmatter.system_requirements.recommended && Object.keys(frontmatter.system_requirements.recommended).length > 0 && (
                      <div className="rounded-xl border border-primary/30 bg-card p-5">
                        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                          <Cpu className="h-4 w-4" />
                          {t.common.recommended}
                        </h3>
                        <dl className="space-y-3">
                          {Object.entries(frontmatter.system_requirements.recommended).map(([key, value]) => (
                            <div key={key}>
                              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{key}</dt>
                              <dd className="text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{value as string}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Social Share */}
              <div className="mt-10 rounded-xl border border-border bg-card p-4">
                <SocialShareButtons url={url} title={frontmatter.title} description={frontmatter.description} />
              </div>

              {/* Bottom Download Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {frontmatter.download_links && frontmatter.download_links.length > 0 ? (
                  frontmatter.download_links.map((dl, idx) => (
                    <a
                      key={idx}
                      href={`${langPrefix}/download?url=${encodeURIComponent(dl.url)}&game=${encodeURIComponent(frontmatter.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      <Download className="h-6 w-6" />
                      {dl.label}{dl.size ? ` (${dl.size})` : ""}
                    </a>
                  ))
                ) : (
                  <a
                    href={`${langPrefix}/download?url=${encodeURIComponent(frontmatter.download_url || "#")}&game=${encodeURIComponent(frontmatter.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    <Download className="h-6 w-6" />
                    {t.common.downloadNow}
                  </a>
                )}
              </div>

              {/* Ad Slot - Responsive: Leaderboard on desktop, Rectangle on mobile */}
              <div className="my-10">
                {/* Desktop ad (728x90) - hidden on mobile */}
                <div className="hidden md:block">
                  <AdSlot type="leaderboard" />
                </div>
                {/* Mobile ad (300x250) - visible only on mobile */}
                <div className="block md:hidden">
                  <AdSlot type="rectangle" />
                </div>
              </div>

              {/* Related Games */}
              <RelatedPosts currentSlug={slug || ""} category={frontmatter.category} />

              {/* Back Link */}
              <div className="mt-12 border-t border-border pt-8">
                <Link
                  to={cat ? `${langPrefix}/${cat.slug}` : langPrefix}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  ← {t.common.moreFrom} {cat?.name || "games"}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
