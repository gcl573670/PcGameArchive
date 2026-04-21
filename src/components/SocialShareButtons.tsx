import { Facebook, Twitter, Send, Share2, Link, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShareButtons = ({ url, title, description }: SocialShareButtonsProps) => {
  const { toast } = useToast();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      className: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      className: "hover:bg-[#25D366] hover:text-white",
    },
    {
      name: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      className: "hover:bg-[#0088cc] hover:text-white",
    },
    {
      name: "Reddit",
      icon: Share2,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      className: "hover:bg-[#FF4500] hover:text-white",
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({ title: "Link copied!", description: "The game link has been copied to your clipboard." });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-1">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share on ${link.name}`}
        >
          <Button
            variant="outline"
            size="icon"
            className={`h-9 w-9 rounded-full border-border transition-colors ${link.className}`}
          >
            <link.icon className="h-4 w-4" />
          </Button>
        </a>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full border-border hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={copyLink}
        title="Copy link"
      >
        <Link className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialShareButtons;
