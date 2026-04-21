import type { Product } from "../products";

// German translations — replace with German product descriptions
const products: Product[] = [
  {
    slug: "pitaka-magez-case-ipad",
    name: "Pitaka MagEZ Hülle für iPad Pro",
    description: "Ultradünne Aramid-Faser-Hülle mit militärischem Schutz ohne Masse. Wiegt nur 100g und unterstützt magnetisches Zubehör.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    price: "$69.99",
    features: [
      "Aramid-Faser-Konstruktion — leichter als Kohlefaser",
      "Nur 0,85mm dünn",
      "Kompatibel mit Magic Keyboard & Apple Pencil",
      "MagSafe-kompatibles Magnetsystem",
      "Kratzfeste matte Oberfläche",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
];

export default products;
