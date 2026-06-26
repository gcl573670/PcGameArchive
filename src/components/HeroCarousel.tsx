import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Post } from "@/types/post";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface HeroCarouselProps {
  posts: Post[];
  maxSlides?: number;
}

interface CarouselSlide {
  image: string;
  post: Post;
}

const HeroCarousel = ({ posts, maxSlides = 5 }: HeroCarouselProps) => {
  const { langPrefix } = useLanguage();
  
  const featuredSlides = useMemo(() => {
    const slides: CarouselSlide[] = [];
    
    const sampledGames = posts.slice(0, Math.min(100, posts.length));
    
    for (const post of sampledGames) {
      const { frontmatter } = post;
      
      if (frontmatter.screenshots && frontmatter.screenshots.length > 0) {
        const screenshotsToUse = frontmatter.screenshots.slice(0, 2);
        screenshotsToUse.forEach((screenshot) => {
          slides.push({ image: screenshot, post });
        });
      } else if (frontmatter.image) {
        slides.push({ image: frontmatter.image, post });
      }
      
      if (slides.length >= maxSlides * 4) break;
    }
    
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [slides[i], slides[j]] = [slides[j], slides[i]];
    }
    
    return slides.slice(0, maxSlides * 2);
  }, [posts, maxSlides]);
  
  // Initialize slides once
  const [currentSlides, setCurrentSlides] = useState<CarouselSlide[]>([]);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (featuredSlides.length > 0) {
      setCurrentSlides(featuredSlides.slice(0, maxSlides));
      setCurrent(0);
    }
  }, [featuredSlides, maxSlides]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % currentSlides.length);
  }, [currentSlides.length]);
  
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + currentSlides.length) % currentSlides.length);
  }, [currentSlides.length]);

  useEffect(() => {
    if (currentSlides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, currentSlides.length]);

  if (currentSlides.length === 0) return null;

  const currentSlide = currentSlides[current];
  const { frontmatter, slug } = currentSlide.post;

  return (
    <section className="relative h-[400px] md:h-[480px] overflow-hidden border-b border-border">
      {/* Background image */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={currentSlide.image}
          alt={frontmatter.title}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="480"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
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

      {/* Navigation arrows */}
      {currentSlides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {currentSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;
