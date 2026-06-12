import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Post } from "@/types/post";
import { Download } from "lucide-react";

const categoryBadgeColors: Record<string, string> = {
  action: "bg-[hsl(var(--category-action)/.15)] text-[hsl(var(--category-action))]",
  adventure: "bg-[hsl(var(--category-adventure)/.15)] text-[hsl(var(--category-adventure))]",
  horror: "bg-[hsl(var(--category-horror)/.15)] text-[hsl(var(--category-horror))]",
  indie: "bg-[hsl(var(--category-indie)/.15)] text-[hsl(var(--category-indie))]",
  openworld: "bg-[hsl(var(--category-openworld)/.15)] text-[hsl(var(--category-openworld))]",
  simulation: "bg-[hsl(var(--category-simulation)/.15)] text-[hsl(var(--category-simulation))]",
  sports: "bg-[hsl(var(--category-sports)/.15)] text-[hsl(var(--category-sports))]",
  shooter: "bg-[hsl(var(--category-shooter)/.15)] text-[hsl(var(--category-shooter))]",
  strategy: "bg-[hsl(var(--category-strategy)/.15)] text-[hsl(var(--category-strategy))]",
};

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { t, langPrefix } = useLanguage();
  const { frontmatter, slug } = post;

  return (
    <article className="game-card group relative">
      <Link to={`${langPrefix}/game/${slug}`} className="block">
        {frontmatter.image && (
          <div className="aspect-[2/3] overflow-hidden relative rounded-lg">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width="300"
              height="450"
            />
            {/* Hover overlay with download icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-primary-foreground shadow-lg">
                <Download className="h-7 w-7" />
              </div>
            </div>
            {/* Bottom gradient with info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-3 transition-opacity duration-300 group-hover:opacity-0">
              <div className="mb-1 flex items-center gap-2">
                <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${categoryBadgeColors[frontmatter.category] || ""}`}>
                  {t.nav[frontmatter.category as keyof typeof t.nav] || frontmatter.category}
                </span>
              </div>
              <h2 className="text-sm font-bold text-foreground line-clamp-2 leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {frontmatter.title}
              </h2>
            </div>
          </div>
        )}
      </Link>
    </article>
  );
};

export default PostCard;
