import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: { src: string; alt?: string }[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const touchStartX = React.useRef(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const navigate = (dir: 1 | -1) => {
    setActiveIndex((prev) => (prev + dir + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  };

  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={cn("my-6 grid gap-2", images.length === 1 ? "grid-cols-1" : images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3", className)}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative overflow-hidden rounded-xl border border-border bg-muted aspect-video focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={img.src}
              alt={img.alt || `Image ${i + 1}`}
              loading="lazy"
              width="640"
              height="360"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-none bg-transparent shadow-none [&>button]:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex items-center justify-center">
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 z-50 rounded-full bg-background/80 p-1.5 text-foreground backdrop-blur-sm hover:bg-background"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 z-50 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Image */}
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt || ""}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={() => navigate(1)}
                className="absolute right-2 z-50 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
