// Hub module — types, helpers, and language-aware accessors.
// Per-language content lives in src/content/products/<lang>.ts

import type { Language } from "@/i18n/translations";
import productsEn from "./products/products.en";
import productsDe from "./products/products.de";
import productsFr from "./products/products.fr";
import productsEs from "./products/products.es";
import productsAr from "./products/products.ar";

export interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  category: string;
  affiliateUrl: string;
}

const productsByLang: Partial<Record<Language, Product[]>> = {
  en: productsEn,
  de: productsDe,
  fr: productsFr,
  es: productsEs,
  ar: productsAr,
};

/** Get products for a language, falling back to English for missing slugs */
function getProductsForLang(lang: Language): Product[] {
  const langProducts = productsByLang[lang] || [];
  if (lang === "en") return langProducts;

  const langMap = new Map(langProducts.map((p) => [p.slug, p]));
  return productsEn.map((enProduct) => langMap.get(enProduct.slug) || enProduct);
}

export function getAllProducts(lang: Language = "en"): Product[] {
  return getProductsForLang(lang);
}

export function getProductBySlug(slug: string, lang: Language = "en"): Product | undefined {
  return getProductsForLang(lang).find((p) => p.slug === slug);
}
