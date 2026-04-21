import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllPosts, categories, getAllBlogPosts } from "@/utils/postLoader";
import type { Post } from "@/types/post";
import type { BlogPost } from "@/utils/postLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SitemapPage = () => {
  const { lang, langPrefix } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [blogExpanded, setBlogExpanded] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [allPosts, allBlogPosts] = await Promise.all([
          getAllPosts(lang),
          getAllBlogPosts(lang)
        ]);
        setPosts(allPosts);
        setBlogPosts(allBlogPosts);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [lang]);

  const toggleCategory = (category: string) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setExpandedCategories(newSet);
  };

  // Group posts by category
  const postsByCategory: Record<string, Post[]> = {};
  categories.forEach(cat => {
    postsByCategory[cat.slug] = posts.filter(p => p.frontmatter.category === cat.slug);
  });

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

  return (
    <>
      <Helmet>
        <title>Sitemap - All Games & Blog Posts | TempoBet</title>
        <meta name="description" content="Complete sitemap of all free PC games and blog posts available. Browse through game categories, find your next favorite game, and read our latest articles." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://pcgamearchive.com/${lang}/sitemap`} />
      </Helmet>
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sitemap</h1>
        <p className="text-muted-foreground mb-8">
          Complete list of all {posts.length} games and {blogPosts.length} blog posts available.
        </p>

        {/* Blog Section */}
        {blogPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Blog Posts</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setBlogExpanded(!blogExpanded)}
                className="w-full flex items-center justify-between p-4 bg-card hover:bg-secondary transition-colors text-left"
              >
                <div>
                  <h3 className="font-bold text-foreground">All Blog Articles</h3>
                  <p className="text-sm text-muted-foreground">{blogPosts.length} articles</p>
                </div>
                <span className="text-muted-foreground">
                  {blogExpanded ? "▼" : "▶"}
                </span>
              </button>
              
              {blogExpanded && (
                <div className="p-4 bg-background">
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {blogPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to={`${langPrefix}/blog/${post.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
                      >
                        {post.frontmatter.image && (
                          <img
                            src={post.frontmatter.image}
                            alt=""
                            className="w-12 h-12 rounded object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
                            {post.frontmatter.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {post.frontmatter.date} • {post.frontmatter.author || "Staff"}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Categories Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Game Categories</h2>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`${langPrefix}/${cat.slug}`}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
              >
                <span>{cat.name}</span>
                <span className="text-xs text-muted-foreground">
                  {postsByCategory[cat.slug]?.length || 0} games
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* All Games by Category */}
        <h2 className="text-xl font-bold text-foreground mb-4">All Games</h2>
        <div className="space-y-6">
          {categories.map((cat) => {
            const categoryPosts = postsByCategory[cat.slug] || [];
            const isExpanded = expandedCategories.has(cat.slug);
            
            return (
              <div key={cat.slug} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(cat.slug)}
                  className="w-full flex items-center justify-between p-4 bg-card hover:bg-secondary transition-colors text-left"
                >
                  <div>
                    <h3 className="font-bold text-foreground">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{categoryPosts.length} games</p>
                  </div>
                  <span className="text-muted-foreground">
                    {isExpanded ? "▼" : "▶"}
                  </span>
                </button>
                
                {isExpanded && (
                  <div className="p-4 bg-background">
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {categoryPosts.map((post) => (
                        <Link
                          key={post.slug}
                          to={`${langPrefix}/game/${post.slug}`}
                          className="flex items-center gap-3 p-2 rounded hover:bg-secondary transition-colors"
                        >
                          {post.frontmatter.image && (
                            <img
                              src={post.frontmatter.image}
                              alt=""
                              className="w-10 h-10 rounded object-cover"
                              loading="lazy"
                            />
                          )}
                          <span className="text-sm text-foreground hover:text-primary transition-colors line-clamp-2">
                            {post.frontmatter.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 p-4 bg-card rounded-lg border border-border text-center text-sm text-muted-foreground">
          Total Games: {posts.length} | Total Blog Posts: {blogPosts.length} | Last Updated: {new Date().toLocaleDateString()}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SitemapPage;
