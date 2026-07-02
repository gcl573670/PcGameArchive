import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllBlogPosts } from "@/utils/postLoader";
import type { BlogPost } from "@/utils/postLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ChevronRight } from "lucide-react";

const BlogPage = () => {
  const { t, langPrefix, lang } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(30);
  const postsPerPage = 30;

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllBlogPosts(lang);
        setPosts(allPosts);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [lang]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + postsPerPage);
  };

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog — PcGameArchive</title>
        <meta name="description" content="Gaming news, tips, guides and more from PcGameArchive." />
      </Helmet>
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Blog</h1>
        <p className="mb-10 text-muted-foreground">Gaming news, tips, guides and more.</p>

        {posts.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No blog posts yet.</p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`${langPrefix}/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  {post.frontmatter.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                      {post.frontmatter.author && (
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {post.frontmatter.author}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.frontmatter.date}
                      </span>
                    </div>
                    <h2 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.frontmatter.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {hasMorePosts && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Load More ({visibleCount} of {posts.length} shown)
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
