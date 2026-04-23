import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProductBySlug } from "@/content/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Check } from "lucide-react";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, langPrefix, lang } = useLanguage();
  const product = getProductBySlug(slug || "", lang);

  if (!product) {
    return (
      <>
        <Header />
        <main className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Link to={`${langPrefix}/shop`} className="mt-4 inline-block text-primary hover:underline">
            ← {t.common.shopTitle}
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} — PcGameArchive</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://pcgamearchive.com/${lang}/shop/${product.slug}`} />
        <meta name="author" content="PcGameArchive" />

        <meta property="og:title" content={`${product.name} — PcGameArchive`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://pcgamearchive.com/${lang}/shop/${product.slug}`} />
        <meta property="og:image" content={product.image || "https://pcgamearchive.com/og-default.jpg"} />
        <meta property="og:site_name" content="Pcgamearchive" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pcgamearchive" />
        <meta name="twitter:title" content={`${product.name} — PcGameArchive`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image || "https://pcgamearchive.com/og-default.jpg"} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.image,
            offers: {
              "@type": "Offer",
              price: product.price.replace("$", ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to={`${langPrefix}`} className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to={`${langPrefix}/shop`} className="hover:text-primary transition-colors">{t.common.shopTitle}</Link>
          <span>/</span>
          <span className="text-foreground/70 truncate">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="mb-4 text-3xl font-bold text-foreground">{product.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Price */}
            <div className="mb-8 rounded-xl border border-border bg-secondary/30 p-6">
              <div className="mb-1 text-sm font-medium text-muted-foreground">{t.common.pricing}</div>
              <div className="text-3xl font-bold text-primary">{product.price}</div>
            </div>

            {/* CTA */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.common.buyNow}
              <ExternalLink className="h-4 w-4" />
            </a>

            {/* Features */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-bold text-foreground">{t.common.features}</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
