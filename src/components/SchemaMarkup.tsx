import { Helmet } from "react-helmet-async";
import type { Frontmatter } from "@/types/post";
import { siteConfig } from "@/config/siteConfig";

interface SchemaMarkupProps {
  frontmatter: Frontmatter;
  url: string;
}

const SchemaMarkup = ({ frontmatter, url }: SchemaMarkupProps) => {
  const ogImage = frontmatter.image || siteConfig.defaultOgImage;
  const ogTitle = `${frontmatter.title} — Free Download | ${siteConfig.siteName}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: frontmatter.game_name || frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.release_date || frontmatter.date,
    url,
    ...(ogImage ? { image: ogImage } : {}),
    author: {
      "@type": "Organization",
      name: frontmatter.developer || siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: frontmatter.publisher || siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };

  return (
    <Helmet>
      <title>{ogTitle}</title>
      <meta name="description" content={frontmatter.description} />
      <meta name="author" content={siteConfig.siteName} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={frontmatter.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={frontmatter.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;