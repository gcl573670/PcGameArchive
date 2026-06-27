import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Post } from "@/types/post";
import { Download } from "lucide-react";

interface HeroBannerProps {
  posts: Post[];
}

const HeroBanner = ({ posts }: HeroBannerProps) => {
  const { langPrefix } = useLanguage();

  const slide = useMemo(() => {
    if (posts.length === 0) return null;
    const post = posts[0];
    const image = post.frontmatter.screenshots?.[0] || post.frontmatter.image;
    if (!image) return null;
    return { image, post };
  }, [posts]);

  if (!slide) return null;

  const { image } = slide;
  const { frontmatter, slug } = slide.post;

  return (
    <section className="relative h-[400px] md:h-[480px] overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={frontmatter.title}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="480"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 md:pb-16">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block rounded bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Featured
          </span>
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-5xl leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {frontmatter.title}
          </h2>
          <p className="mb-6 line-clamp-2 text-sm text-muted-foreground md:text-base">
            {frontmatter.description}
          </p>
          <Link
            to={`${langPrefix}/game/${slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/.3)]"
          >
            <Download className="h-4 w-4" />
            Download Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
