import type { Product } from "../products";

// Arabic translations — replace with Arabic product descriptions
const products: Product[] = [
  {
    slug: "pitaka-magez-case-ipad",
    name: "غلاف Pitaka MagEZ لجهاز iPad Pro",
    description: "غلاف رقيق للغاية من ألياف الأراميد يوفر حماية عسكرية بدون الحجم الزائد. يزن 100 جرام فقط.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    price: "$69.99",
    features: [
      "بناء من ألياف الأراميد — أخف من ألياف الكربون",
      "بسمك 0.85 مم فقط",
      "متوافق مع Magic Keyboard و Apple Pencil",
      "نظام مغناطيسي متوافق مع MagSafe",
      "تشطيب مطفي مقاوم للخدوش",
    ],
    category: "cases",
    affiliateUrl: "#",
  },
];

export default products;
