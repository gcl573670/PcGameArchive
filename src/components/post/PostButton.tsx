import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PostButtonProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  newTab?: boolean;
  className?: string;
}

const PostButton: React.FC<PostButtonProps> = ({
  text,
  href,
  variant = "default",
  newTab = false,
  className,
}) => (
  <a
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    className={cn("no-underline inline-block my-2", className)}
  >
    <Button variant={variant} className="pointer-events-none">
      {text}
    </Button>
  </a>
);

export default PostButton;
