import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageGallery from "./ImageGallery";
import InlineImage from "./InlineImage";
import PostButton from "./PostButton";
import AdSlot from "@/components/AdSlot";

/**
 * Custom syntax supported in post markdown:
 *
 * Gallery:   [gallery: img1.jpg, img2.jpg | alt1, alt2]
 * Icon:      [icon: path.png | size]        size = sm|md|lg|number
 * Button:    [button: text | url | variant | newtab]
 *
 * These are parsed from raw markdown before ReactMarkdown processes it.
 */

interface Props {
  content: string;
}

// Parse custom blocks out of markdown and return React elements
function parseCustomBlocks(content: string): React.ReactNode[] {
  // Split on our custom tags, keeping the tags in the result
  const pattern = /(\[gallery:[^\]]+\]|\[icon:[^\]]+\]|\[button:[^\]]+\]|\[video:[^\]]+\])/g;
  const parts = content.split(pattern);

  let paragraphCount = 0;

  const H2 = ({ children }: { children?: React.ReactNode }) => {
    const text = String(children || "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return <h2 id={id}>{children}</h2>;
  };

  const H3 = ({ children }: { children?: React.ReactNode }) => {
    const text = String(children || "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return <h3 id={id}>{children}</h3>;
  };

  const P = ({ children }: { children?: React.ReactNode }) => {
    paragraphCount++;
    if (paragraphCount === 2) {
      return (
        <>
          <p>{children}</p>
          <AdSlot className="my-6" />
        </>
      );
    }
    return <p>{children}</p>;
  };

  return parts.map((part, i) => {
    // Gallery
    const galleryMatch = part.match(/^\[gallery:\s*(.+)\]$/);
    if (galleryMatch) {
      const inner = galleryMatch[1];
      const [srcsPart, altsPart] = inner.split("|").map((s) => s.trim());
      const srcs = srcsPart.split(",").map((s) => s.trim());
      const alts = altsPart ? altsPart.split(",").map((s) => s.trim()) : [];
      const images = srcs.map((src, idx) => ({ src, alt: alts[idx] || "" }));
      return <ImageGallery key={`gallery-${i}`} images={images} />;
    }

    // Icon
    const iconMatch = part.match(/^\[icon:\s*(.+)\]$/);
    if (iconMatch) {
      const segments = iconMatch[1].split("|").map((s) => s.trim());
      const src = segments[0];
      const rawSize = segments[1] || "sm";
      const size = /^\d+$/.test(rawSize) ? parseInt(rawSize) : (rawSize as "sm" | "md" | "lg");
      return <InlineImage key={`icon-${i}`} src={src} size={size} />;
    }

    // Button
    const buttonMatch = part.match(/^\[button:\s*(.+)\]$/);
    if (buttonMatch) {
      const segments = buttonMatch[1].split("|").map((s) => s.trim());
      const text = segments[0] || "Click";
      const href = segments[1] || "#";
      const variant = (segments[2] || "default") as any;
      const newTab = segments[3] === "true";
      return <PostButton key={`btn-${i}`} text={text} href={href} variant={variant} newTab={newTab} />;
    }

    // Video embed
    const videoMatch = part.match(/^\[video:\s*(.+)\]$/);
    if (videoMatch) {
      const segments = videoMatch[1].split("|").map((s) => s.trim());
      const videoId = segments[0];
      const title = segments[1] || "Video";
      return (
        <div key={`video-${i}`} className="my-6 overflow-hidden rounded-xl border border-border">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      );
    }

    // Regular markdown
    if (!part.trim()) return null;
    return (
      <ReactMarkdown
        key={`md-${i}`}
        remarkPlugins={[remarkGfm]}
        components={{
          h2: H2 as any,
          h3: H3 as any,
          p: P as any,
          table: ({ children }: any) => (
            <div className="my-6 w-full overflow-auto rounded-lg border border-border">
              <table className="w-full caption-bottom text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }: any) => <thead className="bg-muted/50 [&_tr]:border-b">{children}</thead>,
          tbody: ({ children }: any) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>,
          tr: ({ children }: any) => <tr className="border-b transition-colors hover:bg-muted/50">{children}</tr>,
          th: ({ children }: any) => <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">{children}</th>,
          td: ({ children }: any) => <td className="p-4 align-middle">{children}</td>,
        }}
      >
        {part}
      </ReactMarkdown>
    );
  });
}

const PostContentRenderer: React.FC<Props> = ({ content }) => {
  const elements = React.useMemo(() => parseCustomBlocks(content), [content]);
  return <div className="prose-blog">{elements}</div>;
};

export default PostContentRenderer;
