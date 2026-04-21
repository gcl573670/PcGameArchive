import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPostsByCategory } from "@/utils/postLoader";
import type { Post } from "@/types/post";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

const RelatedPosts = ({ currentSlug, category }: RelatedPostsProps) => {
  const { t, langPrefix, lang } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function loadPosts() {
      try {
        const allPosts = await getPostsByCategory(lang, category);
        if (isMounted) {
          // Filter out current post
          const filtered = allPosts.filter((p) => p.slug !== currentSlug);
          
          // Shuffle the remaining posts
          const shuffled = [...filtered];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          
          // Take first 4 random posts
          const randomPosts = shuffled.slice(0, 4);
          setPosts(randomPosts);
        }
      } catch (error) {
        console.error("Failed to load related posts:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    
    loadPosts();
    
    return () => {
      isMounted = false;
    };
  }, [lang, category, currentSlug]);

  if (loading) return null;
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{t.common.relatedPosts}</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`${langPrefix}/game/${post.slug}`}
            className="game-card group"
          >
            {post.frontmatter.image && (
              <div className="aspect-[3/4] overflow-hidden relative rounded-lg">
                <img
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-bold text-foreground line-clamp-2">
                    {post.frontmatter.title}
                  </h3>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;