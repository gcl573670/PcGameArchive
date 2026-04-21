import type { Product } from "../products";

// Spanish translations — replace with Spanish product descriptions
const products: Product[] = [
  {
    slug: "pitaka-magez-case-ipad",
    name: "Pitaka MagEZ Funda para iPad Pro",
    description: "Funda ultra delgada de fibra de aramida con protección de grado militar sin volumen. Pesa solo 100g.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    price: "$69.99",
    features: [
      "Construcción de fibra de aramida — más ligera que la fibra de carbono",
      "Solo 0,85mm de grosor",
      "Compatible con Magic Keyboard y Apple Pencil",
      "Sistema magnético compatible con MagSafe",
      "Acabado mate resistente a rayones",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
];

export default products;
