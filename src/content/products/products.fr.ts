import type { Product } from "../products";

// French translations — replace with French product descriptions
const products: Product[] = [
  {
    slug: "pitaka-magez-case-ipad",
    name: "Pitaka MagEZ Coque pour iPad Pro",
    description: "Coque ultra-fine en fibre d'aramide offrant une protection de grade militaire sans l'encombrement. Ne pèse que 100g.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    price: "$69.99",
    features: [
      "Construction en fibre d'aramide — plus léger que la fibre de carbone",
      "Seulement 0,85mm d'épaisseur",
      "Compatible Magic Keyboard & Apple Pencil",
      "Système magnétique compatible MagSafe",
      "Finition mate résistante aux rayures",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
];

export default products;
