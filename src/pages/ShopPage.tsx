import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllProducts } from "@/content/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShopPage = () => {
  const { t, langPrefix, lang } = useLanguage();
  const products = getAllProducts(lang);

  return (
    <>
      <Helmet>
        <title>{t.common.shopTitle} — pcgamearchive</title>
        <meta name="description" content={t.common.shopSubtitle} />
        <link rel="canonical" href={`https://pcgamearchive.com/${lang}/shop`} />
        <meta property="og:title" content={`${t.common.shopTitle} — TempoBet`} />
        <meta property="og:description" content={t.common.shopSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pcgamearchive.com/${lang}/shop`} />
        <meta property="og:image" content="https://pcgamearchive.com/og-default.jpg" />
        <meta property="og:site_name" content="PcGameArchive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pcgamearchive" />
        <meta name="twitter:title" content={`${t.common.shopTitle} — PcGameArchive`} />
        <meta name="twitter:description" content={t.common.shopSubtitle} />
        <meta name="twitter:image" content="https://pcgamearchive.com/og-default.jpg" />
      </Helmet>
      <Header />
      <main>
        <section className="border-b border-border bg-secondary/30">
          <div className="container mx-auto max-w-5xl px-4 py-12">
            <h1 className="mb-2 text-3xl font-bold text-foreground">{t.common.shopTitle}</h1>
            <p className="text-muted-foreground">{t.common.shopSubtitle}</p>
          </div>
        </section>
        <section className="container mx-auto max-w-5xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`${langPrefix}/shop/${product.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h2>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    {t.common.viewProduct} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopPage;
