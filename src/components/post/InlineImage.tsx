import * as React from "react";
import { cn } from "@/lib/utils";

type ImageSize = "sm" | "md" | "lg";

interface InlineImageProps {
  src: string;
  alt?: string;
  size?: ImageSize | number;
  className?: string;
}

const sizeMap: Record<ImageSize, number> = { sm: 20, md: 32, lg: 48 };

const InlineImage: React.FC<InlineImageProps> = ({ src, alt = "", size = "sm", className }) => {
  const px = typeof size === "number" ? size : sizeMap[size];

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={px}
      height={px}
      className={cn("inline-block align-middle", className)}
      style={{ width: px, height: px }}
      role={alt ? undefined : "presentation"}
    />
  );
};

export default InlineImage;
