import type { Post } from '@/types/post';

// Categories data - Keep original simple strings for backward compatibility
// Add a separate multi-language map for SEO
export const categories = [
  { slug: "action", name: "Action", description: "Fast-paced combat and thrilling gameplay" },
  { slug: "adventure", name: "Adventure", description: "Story-driven exploration and puzzle-solving" },
  { slug: "horror", name: "Horror", description: "Terrifying survival and psychological horror" },
  { slug: "indie", name: "Indie", description: "Creative indie gems and unique experiences" },
  { slug: "openworld", name: "Open World", description: "Vast open worlds to explore freely" },
  { slug: "simulation", name: "Simulation", description: "Realistic simulations and management games" },
  { slug: "sports", name: "Sports", description: "Sports and racing games" },
  { slug: "shooter", name: "Shooter", description: "FPS and TPS shooting action" },
  { slug: "strategy", name: "Strategy", description: "Tactical and real-time strategy games" },
];

// Multi-language SEO descriptions for categories (kept separate to not break existing code)
export const categorySeoDescriptions: { [key: string]: { [key: string]: string } } = {
  action: {
    en: "Download the best action games for PC. Fast-paced combat, thrilling adventures, and intense gameplay. Free downloads available!",
    es: "Descarga los mejores juegos de acción para PC. Combates rápidos, aventuras emocionantes y jugabilidad intensa. ¡Descargas gratuitas disponibles!",
    de: "Laden Sie die besten Action-Spiele für PC herunter. Schnelle Kämpfe, spannende Abenteuer und intensives Gameplay. Kostenlose Downloads verfügbar!",
    fr: "Téléchargez les meilleurs jeux d'action pour PC. Combats rapides, aventures passionnantes et gameplay intense. Téléchargements gratuits disponibles!",
    pt: "Baixe os melhores jogos de ação para PC. Combates rápidos, aventuras emocionantes e jogabilidade intensa. Downloads gratuitos disponíveis!",
    it: "Scarica i migliori giochi d'azione per PC. Combattimenti veloci, avventure emozionanti e gameplay intenso. Download gratuiti disponibili!",
    nl: "Download de beste actiespellen voor pc. Snelle gevechten, spannende avonturen en intense gameplay. Gratis downloads beschikbaar!",
    pl: "Pobierz najlepsze gry akcji na PC. Szybka walka, ekscytujące przygody i intensywna rozgrywka. Darmowe pobieranie!",
    sv: "Ladda ner de bästa actionspelen för PC. Snabb strid, spännande äventyr och intensivt spelande. Gratis nedladdningar tillgängliga!",
    no: "Last ned de beste actionspillene for PC. Raske kamper, spennende eventyr og intens spilling. Gratis nedlastinger tilgjengelig!",
    ru: "Скачайте лучшие экшн-игры для ПК. Быстрые бои, захватывающие приключения и интенсивный геймплей. Бесплатные загрузки!",
    tr: "PC için en iyi aksiyon oyunlarını indirin. Hızlı dövüş, heyecan verici maceralar ve yoğun oynanış. Ücretsiz indirmeler mevcut!",
    ar: "قم بتنزيل أفضل ألعاب الأكشن للكمبيوتر. قتال سريع، مغامرات مثيرة ولعب مكثف. تحميلات مجانية متاحة!",
    id: "Unduh game aksi terbaik untuk PC. Pertarungan cepat, petualangan seru, dan gameplay intens. Unduhan gratis tersedia!",
    vi: "Tải game hành động hay nhất cho PC. Chiến đấu nhanh, phiêu lưu thú vị và lối chơi mãn nhãn. Tải xuống miễn phí!",
    th: "ดาวน์โหลดเกมแอคชั่นที่ดีที่สุดสำหรับพีซี การต่อสู้ที่รวดเร็ว การผจญภัยที่น่าตื่นเต้น และการเล่นที่เข้มข้น มีดาวน์โหลดฟรี!",
    ko: "PC용 최고의 액션 게임을 다운로드하세요. 빠른 전투, 스릴 넘치는 모험, 강렬한 게임플레이. 무료 다운로드 가능!",
    ja: "PC向け最高のアクションゲームをダウンロード。高速バトル、スリリングな冒険、強烈なゲームプレイ。無料ダウンロード可能！",
    hi: "पीसी के लिए सबसे अच्छे एक्शन गेम डाउनलोड करें। तेज-तर्रार लड़ाई, रोमांचक रोमांच, और गहन गेमप्ले। मुफ्त डाउनलोड उपलब्ध!",
    bn: "পিসির জন্য সেরা অ্যাকশন গেম ডাউনলোড করুন। দ্রুতগতির যুদ্ধ, রোমাঞ্চকর অ্যাডভেঞ্চার, এবং তীব্র গেমপ্লে। বিনামূল্যে ডাউনলোড উপলব্ধ!"
  },
  adventure: {
    en: "Download immersive adventure games for PC. Rich storytelling, exploration, and puzzle-solving. Free downloads available!",
    es: "Descarga juegos de aventura inmersivos para PC. Narrativa rica, exploración y resolución de acertijos. ¡Descargas gratuitas disponibles!",
    de: "Laden Sie immersive Abenteuerspiele für PC herunter. Reichhaltiges Storytelling, Erkundung und Rätsellösen. Kostenlose Downloads verfügbar!",
    fr: "Téléchargez des jeux d'aventure immersifs pour PC. Riche narration, exploration et résolution d'énigmes. Téléchargements gratuits disponibles!",
    pt: "Baixe jogos de aventura imersivos para PC. Narrativa rica, exploração e resolução de quebra-cabeças. Downloads gratuitos disponíveis!"
  },
  horror: {
    en: "Download terrifying horror games for PC. Survival horror, psychological thrills, and jump scares. Free downloads available!",
    es: "Descarga juegos de terror aterradores para PC. Horror de supervivencia, emociones psicológicas y sobresaltos. ¡Descargas gratuitas disponibles!",
    de: "Laden Sie erschreckende Horror-Spiele für PC herunter. Überlebenshorror, psychologische Spannung und Jumpscares. Kostenlose Downloads verfügbar!",
    fr: "Téléchargez des jeux d'horreur terrifiants pour PC. Horreur de survie, frissons psychologiques et sursauts. Téléchargements gratuits disponibles!"
  },
  indie: {
    en: "Discover unique indie games for PC. Creative gameplay, artistic visuals, and innovative mechanics. Free downloads available!",
    es: "Descubre juegos indie únicos para PC. Jugabilidad creativa, visuales artísticos y mecánicas innovadoras. ¡Descargas gratuitas disponibles!",
    de: "Entdecken Sie einzigartige Indie-Spiele für PC. Kreatives Gameplay, künstlerische Grafiken und innovative Mechaniken. Kostenlose Downloads verfügbar!"
  },
  openworld: {
    en: "Explore vast open world games for PC. Freedom to roam, discover secrets, and complete epic quests. Free downloads available!",
    es: "Explora vastos juegos de mundo abierto para PC. Libertad para vagar, descubrir secretos y completar misiones épicas. ¡Descargas gratuitas disponibles!"
  },
  simulation: {
    en: "Download realistic simulation games for PC. Manage, build, and experience lifelike scenarios. Free downloads available!"
  },
  sports: {
    en: "Play exciting sports games for PC. Football, basketball, racing, and more. Realistic physics and gameplay. Free downloads available!"
  },
  shooter: {
    en: "Download intense shooter games for PC. First-person and third-person action with realistic weapons. Free downloads available!"
  },
  strategy: {
    en: "Master tactical strategy games for PC. Build, command, and conquer in deep strategic gameplay. Free downloads available!"
  }
};

// Multi-language names for categories (for SEO titles)
export const categorySeoNames: { [key: string]: { [key: string]: string } } = {
  action: {
    en: "Action Games",
    es: "Juegos de Acción",
    de: "Action-Spiele",
    fr: "Jeux d'Action",
    pt: "Jogos de Ação",
    it: "Giochi d'Azione",
    nl: "Actiespellen",
    pl: "Gry Akcji",
    sv: "Actionspel",
    no: "Actionspill",
    ru: "Экшн-игры",
    tr: "Aksiyon Oyunları",
    ar: "ألعاب أكشن",
    id: "Game Aksi",
    vi: "Game Hành Động",
    th: "เกมแอคชั่น",
    ko: "액션 게임",
    ja: "アクションゲーム",
    hi: "एक्शन गेम्स",
    bn: "অ্যাকশন গেমস"
  },
  adventure: {
    en: "Adventure Games",
    es: "Juegos de Aventura",
    de: "Abenteuerspiele",
    fr: "Jeux d'Aventure",
    pt: "Jogos de Aventura",
    it: "Giochi di Avventura",
    nl: "Avonturenspellen",
    pl: "Gry Przygodowe",
    sv: "Äventyrsspel",
    no: "Eventyrspill",
    ru: "Приключенческие игры",
    tr: "Macera Oyunları",
    ar: "ألعاب المغامرات",
    id: "Game Petualangan",
    vi: "Game Phiêu Lưu",
    th: "เกมผจญภัย",
    ko: "어드벤처 게임",
    ja: "アドベンチャーゲーム",
    hi: "एडवेंचर गेम्स",
    bn: "অ্যাডভেঞ্চার গেমস"
  },
  horror: {
    en: "Horror Games",
    es: "Juegos de Terror",
    de: "Horror-Spiele",
    fr: "Jeux d'Horreur",
    pt: "Jogos de Terror"
  },
  indie: {
    en: "Indie Games",
    es: "Juegos Indie",
    de: "Indie-Spiele",
    fr: "Jeux Indépendants",
    pt: "Jogos Indie"
  },
  openworld: {
    en: "Open World Games",
    es: "Juegos de Mundo Abierto",
    de: "Open-World-Spiele",
    fr: "Jeux en Monde Ouvert",
    pt: "Jogos de Mundo Aberto"
  },
  simulation: {
    en: "Simulation Games",
    es: "Juegos de Simulación",
    de: "Simulationsspiele",
    fr: "Jeux de Simulation",
    pt: "Jogos de Simulação"
  },
  sports: {
    en: "Sports Games",
    es: "Juegos de Deportes",
    de: "Sportspiele",
    fr: "Jeux de Sport",
    pt: "Jogos de Esportes"
  },
  shooter: {
    en: "Shooter Games",
    es: "Juegos de Disparos",
    de: "Shooter-Spiele",
    fr: "Jeux de Tir",
    pt: "Jogos de Tiro"
  },
  strategy: {
    en: "Strategy Games",
    es: "Juegos de Estrategia",
    de: "Strategiespiele",
    fr: "Jeux de Stratégie",
    pt: "Jogos de Estratégia"
  }
};

// Helper function to get SEO-optimized category name
export function getSeoCategoryName(categorySlug: string, language: string): string {
  const seoName = categorySeoNames[categorySlug]?.[language];
  if (seoName) return seoName;
  
  // Fallback to original category name
  const category = categories.find(c => c.slug === categorySlug);
  return category?.name || categorySlug;
}

// Helper function to get SEO-optimized category description
export function getSeoCategoryDescription(categorySlug: string, language: string): string {
  const seoDesc = categorySeoDescriptions[categorySlug]?.[language];
  if (seoDesc) return seoDesc;
  
  // Fallback to original description
  const category = categories.find(c => c.slug === categorySlug);
  let description = category?.description || `Download the best ${categorySlug} games for PC. Free downloads available!`;
  
  // Enhance short descriptions
  if (description.length < 100) {
    description += " Download and play for free on PC. Latest updates available!";
  }
  
  return description;
}

// Available categories
const postCategories = ['action', 'adventure', 'horror', 'indie', 'openworld', 'shooter', 'simulation', 'sports', 'strategy'];

// Cache for loaded posts (stripped of content for homepage)
let postsByLanguageCache: Map<string, Post[]> = new Map();
// Cache for full posts (with content, for post pages)
let fullPostsByLanguageCache: Map<string, Post[]> = new Map();

// Function to load all posts for a language (stripped of content for homepage performance)
export async function getAllPosts(language: string = 'en'): Promise<Post[]> {
  // Check cache first
  if (postsByLanguageCache.has(language)) {
    return postsByLanguageCache.get(language)!;
  }
  
  try {
    // Load all category files in parallel
    const results = await Promise.allSettled(
      postCategories.map(async (category) => {
        const response = await fetch(`/posts_json/${language}/${category}.json`);
        if (!response.ok) return [];
        const posts = await response.json();
        return posts.map((post: Post) => ({
          ...post,
          content: '',
          language,
          category
        }));
      })
    );
    
    const allPosts: Post[] = [];
    for (const result of results) {
      if (result.status === 'fulfilled') {
        allPosts.push(...result.value);
      }
    }
    
    // Sort by date (newest first)
    allPosts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
    
    // Cache the result
    postsByLanguageCache.set(language, allPosts);
    return allPosts;
  } catch (error) {
    console.error("Failed to load posts:", error);
    return [];
  }
}

// Get posts by category
export async function getPostsByCategory(language: string, category: string): Promise<Post[]> {
  try {
    // FIXED: Use correct path for Cloudflare Pages
    const response = await fetch(`/posts_json/${language}/${category}.json`);
    if (!response.ok) {
      return [];
    }
    const posts = await response.json();
    return posts.map((post: Post) => ({
      ...post,
      language,
      category
    }));
  } catch (error) {
    console.error(`Failed to load ${language}/${category}:`, error);
    return [];
  }
}

// Get single post by slug (loads categories in parallel)
export async function getPostBySlug(slug: string, language: string = 'en'): Promise<Post | null> {
  try {
    const results = await Promise.allSettled(
      postCategories.map(async (category) => {
        const response = await fetch(`/posts_json/${language}/${category}.json`);
        if (!response.ok) return null;
        const posts = await response.json();
        const found = posts.find((p: Post) => p.slug === slug);
        return found ? { ...found, language, category } : null;
      })
    );

    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        return result.value;
      }
    }

    console.log(`Post not found: ${slug} in ${language}`);
    return null;
  } catch (error) {
    console.error("Error in getPostBySlug:", error);
    return null;
  }
}

// Get related posts (loads only the needed category JSON)
export async function getRelatedPosts(currentSlug: string, category: string, language: string = 'en', limit: number = 4): Promise<Post[]> {
  try {
    const response = await fetch(`/posts_json/${language}/${category}.json`);
    if (!response.ok) return [];
    const posts = await response.json();
    return posts
      .filter((p: Post) => p.slug !== currentSlug)
      .slice(0, limit)
      .map((p: Post) => ({ ...p, language, category }));
  } catch (error) {
    return [];
  }
}

// Extract headings from content
export function extractHeadings(content: string): { level: number; text: string; id: string }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*/g, "").trim();
    headings.push({
      level: match[1].length,
      text,
      id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    });
  }
  return headings;
}

export function extractHeadingsFromContent(content: string): { level: number; text: string; id: string }[] {
  return extractHeadings(content);
}

// Get reading time
export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Get categories list (sync version)
export function getCategoriesSync() {
  return categories;
}

// Blog post functions
export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  content: string;
}

// Cache for blog posts
let blogCache: Map<string, BlogPost[]> = new Map();

export async function getAllBlogPosts(language: string = 'en'): Promise<BlogPost[]> {
  if (blogCache.has(language)) {
    return blogCache.get(language)!;
  }
  
  try {
    // Try to load blog posts for the language
    const blogModule = await import(`../content/blog/${language}/index.ts`);
    const posts = blogModule.default || blogModule;
    blogCache.set(language, posts);
    return posts;
  } catch (error) {
    console.log(`No blog posts found for ${language}, using English as fallback`);
    // Fallback to English
    try {
      const enModule = await import(`../content/blog/en/index.ts`);
      const enPosts = enModule.default || enModule;
      blogCache.set(language, enPosts);
      return enPosts;
    } catch (e) {
      console.error("No blog posts found at all");
      return [];
    }
  }
}

export async function getBlogPostBySlug(slug: string, language: string = 'en'): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts(language);
  return posts.find(post => post.slug === slug) || null;
}

// Search function
export async function searchPosts(language: string, query: string): Promise<Post[]> {
  const allPosts = await getAllPosts(language);
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.frontmatter.title.toLowerCase().includes(lowerQuery) ||
    post.frontmatter.description.toLowerCase().includes(lowerQuery) ||
    post.frontmatter.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Also export as default for convenience
export default {
  categories,
  getAllPosts,
  getPostsByCategory,
  getPostBySlug,
  getRelatedPosts,
  extractHeadings,
  extractHeadingsFromContent,
  getReadingTime,
  getCategoriesSync,
  getAllBlogPosts,
  getBlogPostBySlug,
  searchPosts,
  getSeoCategoryName,
  getSeoCategoryDescription,
};
