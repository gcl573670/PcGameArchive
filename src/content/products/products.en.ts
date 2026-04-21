import type { Product } from "../products";

const products: Product[] = [
  {
    slug: "pitaka-magez-case-ipad",
    name: "Pitaka MagEZ Case for iPad Pro",
    description: "Ultra-thin aramid fiber case that adds military-grade protection without the bulk. Weighs just 100g and supports magnetic accessories.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    price: "$69.99",
    features: [
      "Aramid fiber construction — lighter than carbon fiber",
      "Only 0.85mm thin",
      "Compatible with Magic Keyboard & Apple Pencil",
      "MagSafe-compatible magnetic mount system",
      "Scratch-resistant matte finish",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
  {
    slug: "logitech-combo-touch-keyboard",
    name: "Logitech Combo Touch Keyboard",
    description: "Detachable backlit keyboard with trackpad that transforms your iPad into a lightweight laptop. Precision trackpad with gesture support.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    price: "$199.99",
    features: [
      "Detachable keyboard with full-size keys",
      "Built-in trackpad with multi-touch gestures",
      "16 levels of backlight adjustment",
      "Multiple viewing angles with kickstand",
      "Smart Connector — no charging needed",
    ],
    category: "keyboards",
    affiliateUrl: "#",
  },
  {
    slug: "apple-pencil-pro",
    name: "Apple Pencil Pro",
    description: "The most advanced Apple Pencil with squeeze gesture, barrel roll, and haptic feedback. Perfect for creative professionals on iPad.",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80",
    price: "$129.00",
    features: [
      "Squeeze gesture for quick tool switching",
      "Barrel roll for precise brush control",
      "Haptic feedback for intuitive interaction",
      "Find My support — never lose it",
      "Pixel-perfect precision with zero lag",
    ],
    category: "stylus",
    affiliateUrl: "#",
  },
  {
    slug: "zugu-muse-case",
    name: "ZUGU MUSE Case for iPad Air",
    description: "Premium protective case with 8 magnetic stand angles. Built-in bumper protection and auto sleep/wake functionality.",
    image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=800&q=80",
    price: "$59.99",
    features: [
      "8 magnetic stand angles",
      "Military-grade drop protection",
      "Apple Pencil charging compatible",
      "Auto sleep/wake magnetic closure",
      "Microfiber interior lining",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
];

export default products;
