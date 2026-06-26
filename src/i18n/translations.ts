export const supportedLanguages = [
  "en", "es", "de", "fr", "pt", "it", "nl", "pl", "sv", "no",
  "ru", "tr", "ar", "id", "vi", "th", "ko", "ja", "hi", "bn",
  "ro", "cs", "hu", "el", "da", "fi", "sk", "bg", "uk", "sr",
  "ms", "fil", "he", "fa", "hr",
] as const;

export type Language = (typeof supportedLanguages)[number];

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  sv: "Svenska",
  no: "Norsk",
  ru: "Русский",
  tr: "Türkçe",
  ar: "العربية",
  id: "Bahasa Indonesia",
  vi: "Tiếng Việt",
  th: "ไทย",
  ko: "한국어",
  ja: "日本語",
  hi: "हिन्दी",
  bn: "বাংলা",
  ro: "Română",
  cs: "Čeština",
  hu: "Magyar",
  el: "Ελληνικά",
  da: "Dansk",
  fi: "Suomi",
  sk: "Slovenčina",
  bg: "Български",
  uk: "Українська",
  sr: "Српски",
  ms: "Bahasa Melayu",
  fil: "Filipino",
  he: "עברית",
  fa: "فارسی",
  hr: "Hrvatski",
};

export const rtlLanguages: Language[] = ["ar", "he", "fa"];

export function isRtl(lang: Language): boolean {
  return rtlLanguages.includes(lang);
}

export const defaultLanguage: Language = "en";

type TranslationKeys = {
  nav: {
    action: string;
    adventure: string;
    horror: string;
    indie: string;
    openworld: string;
    simulation: string;
    sports: string;
    shooter: string;
    strategy: string;
    shop: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  common: {
    latestPicks: string;
    browseByCategory: string;
    minRead: string;
    loadMore: string;
    relatedPosts: string;
    readMore: string;
    backToHome: string;
    postNotFound: string;
    categoryNotFound: string;
    tableOfContents: string;
    advertisement: string;
    shopTitle: string;
    shopSubtitle: string;
    viewProduct: string;
    buyNow: string;
    features: string;
    pricing: string;
    moreFrom: string;
    download: string;
    downloadNow: string;
    systemRequirements: string;
    minimum: string;
    recommended: string;
    screenshots: string;
    popularGames: string;
    recentGames: string;
    allCategories: string;
    freeDownload: string;
  };
  footer: {
    categories: string;
    legal: string;
    company: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    rights: string;
    description: string;
    rss: string;
  };
};

const en: TranslationKeys = {
  nav: { action: "Action", adventure: "Adventure", horror: "Horror", indie: "Indie", openworld: "Open World", simulation: "Simulation", sports: "Sports", shooter: "Shooter", strategy: "Strategy", shop: "Shop" },
  hero: { title: "Download ", titleHighlight: "Free PC Games", subtitle: "The latest games available for free download. Action, Adventure, Horror, Indie, and more." },
  common: { latestPicks: "Latest Games", browseByCategory: "Browse by Genre", minRead: "min read", loadMore: "Load More", relatedPosts: "Related Games", readMore: "Read More", backToHome: "Back to home", postNotFound: "Game not found", categoryNotFound: "Category not found", tableOfContents: "Table of Contents", advertisement: "Advertisement", shopTitle: "Shop", shopSubtitle: "Gaming gear and accessories", viewProduct: "View Product", buyNow: "Buy Now", features: "Features", pricing: "Pricing", moreFrom: "More", download: "Download", downloadNow: "Download Now", systemRequirements: "System Requirements", minimum: "Minimum", recommended: "Recommended", screenshots: "Screenshots", popularGames: "Popular Games", recentGames: "Recent Games", allCategories: "All Categories", freeDownload: "Free Download" },
  footer: { categories: "Categories", legal: "Legal", company: "Company", privacy: "Privacy Policy", terms: "Terms & Conditions", about: "About Us", contact: "Contact Us", rights: "All rights reserved.", description: "Free PC game downloads. Action, Adventure, Horror, Indie, and more.", rss: "RSS Feed" },
};

export const translations: Record<Language, TranslationKeys> = {
  en,
  es: {
    nav: { action: "Acción", adventure: "Aventura", horror: "Terror", indie: "Indie", openworld: "Mundo Abierto", simulation: "Simulación", sports: "Deportes", shooter: "Shooter", strategy: "Estrategia", shop: "Tienda" },
    hero: { title: "Descargar ", titleHighlight: "Juegos de PC Gratis", subtitle: "Los últimos juegos disponibles para descarga gratuita." },
    common: { latestPicks: "Últimos Juegos", browseByCategory: "Explorar por género", minRead: "min", loadMore: "Cargar más", relatedPosts: "Juegos relacionados", readMore: "Leer más", backToHome: "Volver", postNotFound: "Juego no encontrado", categoryNotFound: "Categoría no encontrada", tableOfContents: "Índice", advertisement: "Publicidad", shopTitle: "Tienda", shopSubtitle: "Accesorios gaming", viewProduct: "Ver", buyNow: "Comprar", features: "Características", pricing: "Precio", moreFrom: "Más", download: "Descargar", downloadNow: "Descargar ahora", systemRequirements: "Requisitos del sistema", minimum: "Mínimos", recommended: "Recomendados", screenshots: "Capturas", popularGames: "Juegos populares", recentGames: "Juegos recientes", allCategories: "Todas las categorías", freeDownload: "Descarga gratuita" },
    footer: { categories: "Categorías", legal: "Legal", company: "Empresa", privacy: "Privacidad", terms: "Términos", about: "Sobre nosotros", contact: "Contacto", rights: "Todos los derechos reservados.", description: "Descargas de juegos de PC gratis.", rss: "RSS" },
  },
  de: {
    nav: { action: "Action", adventure: "Abenteuer", horror: "Horror", indie: "Indie", openworld: "Open World", simulation: "Simulation", sports: "Sport", shooter: "Shooter", strategy: "Strategie", shop: "Shop" },
    hero: { title: "Kostenlose ", titleHighlight: "PC-Spiele herunterladen", subtitle: "Die neuesten Spiele kostenlos zum Download." },
    common: { latestPicks: "Neueste Spiele", browseByCategory: "Nach Genre durchsuchen", minRead: "Min. Lesezeit", loadMore: "Mehr laden", relatedPosts: "Ähnliche Spiele", readMore: "Weiterlesen", backToHome: "Zurück", postNotFound: "Spiel nicht gefunden", categoryNotFound: "Kategorie nicht gefunden", tableOfContents: "Inhaltsverzeichnis", advertisement: "Werbung", shopTitle: "Shop", shopSubtitle: "Gaming-Zubehör", viewProduct: "Produkt ansehen", buyNow: "Kaufen", features: "Funktionen", pricing: "Preis", moreFrom: "Mehr", download: "Herunterladen", downloadNow: "Jetzt herunterladen", systemRequirements: "Systemanforderungen", minimum: "Minimum", recommended: "Empfohlen", screenshots: "Screenshots", popularGames: "Beliebte Spiele", recentGames: "Neueste Spiele", allCategories: "Alle Kategorien", freeDownload: "Kostenloser Download" },
    footer: { categories: "Kategorien", legal: "Rechtliches", company: "Unternehmen", privacy: "Datenschutz", terms: "AGB", about: "Über uns", contact: "Kontakt", rights: "Alle Rechte vorbehalten.", description: "Kostenlose PC-Spiele-Downloads.", rss: "RSS" },
  },
  fr: {
    nav: { action: "Action", adventure: "Aventure", horror: "Horreur", indie: "Indie", openworld: "Monde Ouvert", simulation: "Simulation", sports: "Sports", shooter: "Tir", strategy: "Stratégie", shop: "Boutique" },
    hero: { title: "Télécharger des ", titleHighlight: "Jeux PC Gratuits", subtitle: "Les derniers jeux disponibles en téléchargement gratuit." },
    common: { latestPicks: "Derniers Jeux", browseByCategory: "Parcourir par genre", minRead: "min", loadMore: "Charger plus", relatedPosts: "Jeux similaires", readMore: "Lire la suite", backToHome: "Retour", postNotFound: "Jeu introuvable", categoryNotFound: "Catégorie introuvable", tableOfContents: "Sommaire", advertisement: "Publicité", shopTitle: "Boutique", shopSubtitle: "Accessoires gaming", viewProduct: "Voir", buyNow: "Acheter", features: "Caractéristiques", pricing: "Prix", moreFrom: "Plus", download: "Télécharger", downloadNow: "Télécharger maintenant", systemRequirements: "Configuration requise", minimum: "Minimum", recommended: "Recommandé", screenshots: "Captures d'écran", popularGames: "Jeux populaires", recentGames: "Jeux récents", allCategories: "Toutes les catégories", freeDownload: "Téléchargement gratuit" },
    footer: { categories: "Catégories", legal: "Mentions légales", company: "Entreprise", privacy: "Confidentialité", terms: "CGU", about: "À propos", contact: "Contact", rights: "Tous droits réservés.", description: "Téléchargements de jeux PC gratuits.", rss: "RSS" },
  },
  pt: {
    nav: { action: "Ação", adventure: "Aventura", horror: "Terror", indie: "Indie", openworld: "Mundo Aberto", simulation: "Simulação", sports: "Esportes", shooter: "Tiro", strategy: "Estratégia", shop: "Loja" },
    hero: { title: "Baixar ", titleHighlight: "Jogos de PC Grátis", subtitle: "Os últimos jogos disponíveis para download gratuito." },
    common: { latestPicks: "Últimos Jogos", browseByCategory: "Explorar por gênero", minRead: "min", loadMore: "Carregar mais", relatedPosts: "Jogos relacionados", readMore: "Ler mais", backToHome: "Voltar", postNotFound: "Jogo não encontrado", categoryNotFound: "Categoria não encontrada", tableOfContents: "Índice", advertisement: "Publicidade", shopTitle: "Loja", shopSubtitle: "Acessórios gamer", viewProduct: "Ver produto", buyNow: "Comprar", features: "Recursos", pricing: "Preço", moreFrom: "Mais", download: "Baixar", downloadNow: "Baixar agora", systemRequirements: "Requisitos do sistema", minimum: "Mínimos", recommended: "Recomendados", screenshots: "Capturas de tela", popularGames: "Jogos populares", recentGames: "Jogos recentes", allCategories: "Todas as categorias", freeDownload: "Download grátis" },
    footer: { categories: "Categorias", legal: "Legal", company: "Empresa", privacy: "Privacidade", terms: "Termos", about: "Sobre nós", contact: "Contato", rights: "Todos os direitos reservados.", description: "Downloads de jogos de PC grátis.", rss: "RSS" },
  },
  it: {
    nav: { action: "Azione", adventure: "Avventura", horror: "Horror", indie: "Indie", openworld: "Mondo Aperto", simulation: "Simulazione", sports: "Sport", shooter: "Sparatutto", strategy: "Strategia", shop: "Negozio" },
    hero: { title: "Scarica ", titleHighlight: "Giochi PC Gratis", subtitle: "Gli ultimi giochi disponibili per il download gratuito." },
    common: { latestPicks: "Ultimi Giochi", browseByCategory: "Esplora per genere", minRead: "min", loadMore: "Carica altro", relatedPosts: "Giochi correlati", readMore: "Leggi di più", backToHome: "Torna alla home", postNotFound: "Gioco non trovato", categoryNotFound: "Categoria non trovata", tableOfContents: "Indice", advertisement: "Pubblicità", shopTitle: "Negozio", shopSubtitle: "Accessori gaming", viewProduct: "Vedi prodotto", buyNow: "Acquista", features: "Caratteristiche", pricing: "Prezzo", moreFrom: "Altro", download: "Scarica", downloadNow: "Scarica ora", systemRequirements: "Requisiti di sistema", minimum: "Minimi", recommended: "Raccomandati", screenshots: "Screenshot", popularGames: "Giochi popolari", recentGames: "Giochi recenti", allCategories: "Tutte le categorie", freeDownload: "Download gratuito" },
    footer: { categories: "Categorie", legal: "Legale", company: "Azienda", privacy: "Privacy", terms: "Termini", about: "Chi siamo", contact: "Contattaci", rights: "Tutti i diritti riservati.", description: "Download di giochi PC gratuiti.", rss: "RSS" },
  },
  nl: {
    nav: { action: "Actie", adventure: "Avontuur", horror: "Horror", indie: "Indie", openworld: "Open Wereld", simulation: "Simulatie", sports: "Sport", shooter: "Shooter", strategy: "Strategie", shop: "Winkel" },
    hero: { title: "Download ", titleHighlight: "Gratis PC Games", subtitle: "De nieuwste games gratis te downloaden." },
    common: { latestPicks: "Nieuwste Games", browseByCategory: "Blader op genre", minRead: "min", loadMore: "Meer laden", relatedPosts: "Gerelateerde games", readMore: "Lees meer", backToHome: "Terug naar home", postNotFound: "Game niet gevonden", categoryNotFound: "Categorie niet gevonden", tableOfContents: "Inhoudsopgave", advertisement: "Advertentie", shopTitle: "Winkel", shopSubtitle: "Gaming accessoires", viewProduct: "Bekijk product", buyNow: "Kopen", features: "Kenmerken", pricing: "Prijs", moreFrom: "Meer", download: "Downloaden", downloadNow: "Nu downloaden", systemRequirements: "Systeemvereisten", minimum: "Minimum", recommended: "Aanbevolen", screenshots: "Screenshots", popularGames: "Populaire games", recentGames: "Recente games", allCategories: "Alle categorieën", freeDownload: "Gratis download" },
    footer: { categories: "Categorieën", legal: "Juridisch", company: "Bedrijf", privacy: "Privacy", terms: "Voorwaarden", about: "Over ons", contact: "Contact", rights: "Alle rechten voorbehouden.", description: "Gratis PC game downloads.", rss: "RSS" },
  },
  pl: {
    nav: { action: "Akcja", adventure: "Przygoda", horror: "Horror", indie: "Indie", openworld: "Otwarty Świat", simulation: "Symulacja", sports: "Sport", shooter: "Strzelanka", strategy: "Strategia", shop: "Sklep" },
    hero: { title: "Pobierz ", titleHighlight: "Darmowe Gry PC", subtitle: "Najnowsze gry dostępne do pobrania za darmo." },
    common: { latestPicks: "Najnowsze Gry", browseByCategory: "Przeglądaj wg gatunku", minRead: "min", loadMore: "Załaduj więcej", relatedPosts: "Powiązane gry", readMore: "Czytaj więcej", backToHome: "Powrót", postNotFound: "Gra nie znaleziona", categoryNotFound: "Kategoria nie znaleziona", tableOfContents: "Spis treści", advertisement: "Reklama", shopTitle: "Sklep", shopSubtitle: "Akcesoria gamingowe", viewProduct: "Zobacz produkt", buyNow: "Kup", features: "Funkcje", pricing: "Cena", moreFrom: "Więcej", download: "Pobierz", downloadNow: "Pobierz teraz", systemRequirements: "Wymagania systemowe", minimum: "Minimalne", recommended: "Zalecane", screenshots: "Zrzuty ekranu", popularGames: "Popularne gry", recentGames: "Ostatnie gry", allCategories: "Wszystkie kategorie", freeDownload: "Darmowe pobieranie" },
    footer: { categories: "Kategorie", legal: "Prawne", company: "Firma", privacy: "Prywatność", terms: "Regulamin", about: "O nas", contact: "Kontakt", rights: "Wszelkie prawa zastrzeżone.", description: "Darmowe pobieranie gier PC.", rss: "RSS" },
  },
  sv: {
    nav: { action: "Action", adventure: "Äventyr", horror: "Skräck", indie: "Indie", openworld: "Öppen Värld", simulation: "Simulering", sports: "Sport", shooter: "Shooter", strategy: "Strategi", shop: "Butik" },
    hero: { title: "Ladda ner ", titleHighlight: "Gratis PC-spel", subtitle: "De senaste spelen tillgängliga för gratis nedladdning." },
    common: { latestPicks: "Senaste Spel", browseByCategory: "Bläddra efter genre", minRead: "min", loadMore: "Ladda fler", relatedPosts: "Relaterade spel", readMore: "Läs mer", backToHome: "Tillbaka", postNotFound: "Spelet hittades inte", categoryNotFound: "Kategori hittades inte", tableOfContents: "Innehåll", advertisement: "Annons", shopTitle: "Butik", shopSubtitle: "Gaming-tillbehör", viewProduct: "Visa produkt", buyNow: "Köp", features: "Funktioner", pricing: "Pris", moreFrom: "Mer", download: "Ladda ner", downloadNow: "Ladda ner nu", systemRequirements: "Systemkrav", minimum: "Minimum", recommended: "Rekommenderat", screenshots: "Skärmbilder", popularGames: "Populära spel", recentGames: "Senaste spel", allCategories: "Alla kategorier", freeDownload: "Gratis nedladdning" },
    footer: { categories: "Kategorier", legal: "Juridiskt", company: "Företag", privacy: "Integritet", terms: "Villkor", about: "Om oss", contact: "Kontakt", rights: "Alla rättigheter förbehållna.", description: "Gratis PC-spel nedladdningar.", rss: "RSS" },
  },
  no: {
    nav: { action: "Action", adventure: "Eventyr", horror: "Skrekk", indie: "Indie", openworld: "Åpen Verden", simulation: "Simulering", sports: "Sport", shooter: "Shooter", strategy: "Strategi", shop: "Butikk" },
    hero: { title: "Last ned ", titleHighlight: "Gratis PC-spill", subtitle: "De nyeste spillene tilgjengelig for gratis nedlasting." },
    common: { latestPicks: "Nyeste Spill", browseByCategory: "Bla etter sjanger", minRead: "min", loadMore: "Last flere", relatedPosts: "Relaterte spill", readMore: "Les mer", backToHome: "Tilbake", postNotFound: "Spill ikke funnet", categoryNotFound: "Kategori ikke funnet", tableOfContents: "Innhold", advertisement: "Annonse", shopTitle: "Butikk", shopSubtitle: "Gaming-tilbehør", viewProduct: "Se produkt", buyNow: "Kjøp", features: "Funksjoner", pricing: "Pris", moreFrom: "Mer", download: "Last ned", downloadNow: "Last ned nå", systemRequirements: "Systemkrav", minimum: "Minimum", recommended: "Anbefalt", screenshots: "Skjermbilder", popularGames: "Populære spill", recentGames: "Nyeste spill", allCategories: "Alle kategorier", freeDownload: "Gratis nedlasting" },
    footer: { categories: "Kategorier", legal: "Juridisk", company: "Selskap", privacy: "Personvern", terms: "Vilkår", about: "Om oss", contact: "Kontakt", rights: "Alle rettigheter reservert.", description: "Gratis PC-spill nedlastinger.", rss: "RSS" },
  },
  ru: {
    nav: { action: "Экшен", adventure: "Приключения", horror: "Ужасы", indie: "Инди", openworld: "Открытый Мир", simulation: "Симулятор", sports: "Спорт", shooter: "Шутер", strategy: "Стратегия", shop: "Магазин" },
    hero: { title: "Скачать ", titleHighlight: "Бесплатные PC Игры", subtitle: "Новейшие игры для бесплатного скачивания." },
    common: { latestPicks: "Новые Игры", browseByCategory: "По жанрам", minRead: "мин", loadMore: "Загрузить ещё", relatedPosts: "Похожие игры", readMore: "Читать далее", backToHome: "На главную", postNotFound: "Игра не найдена", categoryNotFound: "Категория не найдена", tableOfContents: "Содержание", advertisement: "Реклама", shopTitle: "Магазин", shopSubtitle: "Игровые аксессуары", viewProduct: "Просмотр", buyNow: "Купить", features: "Особенности", pricing: "Цена", moreFrom: "Ещё", download: "Скачать", downloadNow: "Скачать сейчас", systemRequirements: "Системные требования", minimum: "Минимальные", recommended: "Рекомендуемые", screenshots: "Скриншоты", popularGames: "Популярные игры", recentGames: "Новые игры", allCategories: "Все категории", freeDownload: "Бесплатно" },
    footer: { categories: "Категории", legal: "Правовая информация", company: "Компания", privacy: "Конфиденциальность", terms: "Условия", about: "О нас", contact: "Контакты", rights: "Все права защищены.", description: "Бесплатные загрузки игр для ПК.", rss: "RSS" },
  },
  tr: {
    nav: { action: "Aksiyon", adventure: "Macera", horror: "Korku", indie: "Bağımsız", openworld: "Açık Dünya", simulation: "Simülasyon", sports: "Spor", shooter: "Nişancı", strategy: "Strateji", shop: "Mağaza" },
    hero: { title: "İndir ", titleHighlight: "Ücretsiz PC Oyunları", subtitle: "En yeni oyunlar ücretsiz indirmeye hazır." },
    common: { latestPicks: "Son Oyunlar", browseByCategory: "Türe göre ara", minRead: "dk", loadMore: "Daha fazla", relatedPosts: "İlgili oyunlar", readMore: "Devamını oku", backToHome: "Ana sayfa", postNotFound: "Oyun bulunamadı", categoryNotFound: "Kategori bulunamadı", tableOfContents: "İçindekiler", advertisement: "Reklam", shopTitle: "Mağaza", shopSubtitle: "Oyun aksesuarları", viewProduct: "Ürünü gör", buyNow: "Satın al", features: "Özellikler", pricing: "Fiyat", moreFrom: "Daha fazla", download: "İndir", downloadNow: "Şimdi indir", systemRequirements: "Sistem gereksinimleri", minimum: "Minimum", recommended: "Önerilen", screenshots: "Ekran görüntüleri", popularGames: "Popüler oyunlar", recentGames: "Son oyunlar", allCategories: "Tüm kategoriler", freeDownload: "Ücretsiz indir" },
    footer: { categories: "Kategoriler", legal: "Yasal", company: "Şirket", privacy: "Gizlilik", terms: "Şartlar", about: "Hakkımızda", contact: "İletişim", rights: "Tüm hakları saklıdır.", description: "Ücretsiz PC oyun indirmeleri.", rss: "RSS" },
  },
  ar: {
    nav: { action: "أكشن", adventure: "مغامرة", horror: "رعب", indie: "مستقلة", openworld: "عالم مفتوح", simulation: "محاكاة", sports: "رياضة", shooter: "تصويب", strategy: "استراتيجية", shop: "متجر" },
    hero: { title: "تحميل ", titleHighlight: "ألعاب PC مجانية", subtitle: "أحدث الألعاب متاحة للتحميل المجاني." },
    common: { latestPicks: "أحدث الألعاب", browseByCategory: "تصفح حسب النوع", minRead: "دقائق", loadMore: "المزيد", relatedPosts: "ألعاب مشابهة", readMore: "اقرأ المزيد", backToHome: "العودة", postNotFound: "اللعبة غير موجودة", categoryNotFound: "الفئة غير موجودة", tableOfContents: "المحتويات", advertisement: "إعلان", shopTitle: "المتجر", shopSubtitle: "ملحقات الألعاب", viewProduct: "عرض", buyNow: "شراء", features: "المميزات", pricing: "السعر", moreFrom: "المزيد", download: "تحميل", downloadNow: "حمل الآن", systemRequirements: "متطلبات النظام", minimum: "الحد الأدنى", recommended: "الموصى بها", screenshots: "لقطات", popularGames: "ألعاب شائعة", recentGames: "ألعاب حديثة", allCategories: "جميع الفئات", freeDownload: "تحميل مجاني" },
    footer: { categories: "الفئات", legal: "قانوني", company: "الشركة", privacy: "الخصوصية", terms: "الشروط", about: "من نحن", contact: "اتصل بنا", rights: "جميع الحقوق محفوظة.", description: "تحميل ألعاب PC مجانية.", rss: "RSS" },
  },
  id: {
    nav: { action: "Aksi", adventure: "Petualangan", horror: "Horor", indie: "Indie", openworld: "Dunia Terbuka", simulation: "Simulasi", sports: "Olahraga", shooter: "Tembak-menembak", strategy: "Strategi", shop: "Toko" },
    hero: { title: "Unduh ", titleHighlight: "Game PC Gratis", subtitle: "Game terbaru tersedia untuk diunduh gratis." },
    common: { latestPicks: "Game Terbaru", browseByCategory: "Jelajahi berdasarkan genre", minRead: "menit", loadMore: "Muat lebih", relatedPosts: "Game terkait", readMore: "Baca selengkapnya", backToHome: "Kembali", postNotFound: "Game tidak ditemukan", categoryNotFound: "Kategori tidak ditemukan", tableOfContents: "Daftar Isi", advertisement: "Iklan", shopTitle: "Toko", shopSubtitle: "Aksesori gaming", viewProduct: "Lihat produk", buyNow: "Beli", features: "Fitur", pricing: "Harga", moreFrom: "Lainnya", download: "Unduh", downloadNow: "Unduh sekarang", systemRequirements: "Persyaratan sistem", minimum: "Minimum", recommended: "Direkomendasikan", screenshots: "Tangkapan layar", popularGames: "Game populer", recentGames: "Game terbaru", allCategories: "Semua kategori", freeDownload: "Unduh gratis" },
    footer: { categories: "Kategori", legal: "Hukum", company: "Perusahaan", privacy: "Privasi", terms: "Ketentuan", about: "Tentang kami", contact: "Hubungi kami", rights: "Hak cipta dilindungi.", description: "Unduh game PC gratis.", rss: "RSS" },
  },
  vi: {
    nav: { action: "Hành Động", adventure: "Phiêu Lưu", horror: "Kinh Dị", indie: "Indie", openworld: "Thế Giới Mở", simulation: "Mô Phỏng", sports: "Thể Thao", shooter: "Bắn Súng", strategy: "Chiến Thuật", shop: "Cửa Hàng" },
    hero: { title: "Tải ", titleHighlight: "Game PC Miễn Phí", subtitle: "Các game mới nhất có sẵn để tải miễn phí." },
    common: { latestPicks: "Game Mới Nhất", browseByCategory: "Duyệt theo thể loại", minRead: "phút", loadMore: "Tải thêm", relatedPosts: "Game liên quan", readMore: "Đọc thêm", backToHome: "Về trang chủ", postNotFound: "Không tìm thấy game", categoryNotFound: "Không tìm thấy danh mục", tableOfContents: "Mục lục", advertisement: "Quảng cáo", shopTitle: "Cửa hàng", shopSubtitle: "Phụ kiện gaming", viewProduct: "Xem sản phẩm", buyNow: "Mua ngay", features: "Tính năng", pricing: "Giá", moreFrom: "Thêm", download: "Tải về", downloadNow: "Tải ngay", systemRequirements: "Yêu cầu hệ thống", minimum: "Tối thiểu", recommended: "Khuyến nghị", screenshots: "Ảnh chụp màn hình", popularGames: "Game phổ biến", recentGames: "Game gần đây", allCategories: "Tất cả danh mục", freeDownload: "Tải miễn phí" },
    footer: { categories: "Danh mục", legal: "Pháp lý", company: "Công ty", privacy: "Quyền riêng tư", terms: "Điều khoản", about: "Về chúng tôi", contact: "Liên hệ", rights: "Bảo lưu mọi quyền.", description: "Tải game PC miễn phí.", rss: "RSS" },
  },
  th: {
    nav: { action: "แอคชั่น", adventure: "ผจญภัย", horror: "สยองขวัญ", indie: "อินดี้", openworld: "โอเพ่นเวิลด์", simulation: "จำลอง", sports: "กีฬา", shooter: "ยิง", strategy: "กลยุทธ์", shop: "ร้านค้า" },
    hero: { title: "ดาวน์โหลด", titleHighlight: "เกม PC ฟรี", subtitle: "เกมใหม่ล่าสุดพร้อมดาวน์โหลดฟรี" },
    common: { latestPicks: "เกมล่าสุด", browseByCategory: "เรียกดูตามประเภท", minRead: "นาที", loadMore: "โหลดเพิ่ม", relatedPosts: "เกมที่เกี่ยวข้อง", readMore: "อ่านเพิ่ม", backToHome: "กลับหน้าแรก", postNotFound: "ไม่พบเกม", categoryNotFound: "ไม่พบหมวดหมู่", tableOfContents: "สารบัญ", advertisement: "โฆษณา", shopTitle: "ร้านค้า", shopSubtitle: "อุปกรณ์เกมมิ่ง", viewProduct: "ดูสินค้า", buyNow: "ซื้อ", features: "คุณสมบัติ", pricing: "ราคา", moreFrom: "เพิ่มเติม", download: "ดาวน์โหลด", downloadNow: "ดาวน์โหลดเดี๋ยวนี้", systemRequirements: "ความต้องการระบบ", minimum: "ขั้นต่ำ", recommended: "แนะนำ", screenshots: "ภาพหน้าจอ", popularGames: "เกมยอดนิยม", recentGames: "เกมล่าสุด", allCategories: "ทุกหมวดหมู่", freeDownload: "ดาวน์โหลดฟรี" },
    footer: { categories: "หมวดหมู่", legal: "กฎหมาย", company: "บริษัท", privacy: "ความเป็นส่วนตัว", terms: "ข้อกำหนด", about: "เกี่ยวกับเรา", contact: "ติดต่อเรา", rights: "สงวนลิขสิทธิ์", description: "ดาวน์โหลดเกม PC ฟรี", rss: "RSS" },
  },
  ko: {
    nav: { action: "액션", adventure: "어드벤처", horror: "호러", indie: "인디", openworld: "오픈 월드", simulation: "시뮬레이션", sports: "스포츠", shooter: "슈터", strategy: "전략", shop: "상점" },
    hero: { title: "다운로드 ", titleHighlight: "무료 PC 게임", subtitle: "최신 게임을 무료로 다운로드하세요." },
    common: { latestPicks: "최신 게임", browseByCategory: "장르별 탐색", minRead: "분", loadMore: "더 보기", relatedPosts: "관련 게임", readMore: "더 읽기", backToHome: "홈으로", postNotFound: "게임을 찾을 수 없습니다", categoryNotFound: "카테고리를 찾을 수 없습니다", tableOfContents: "목차", advertisement: "광고", shopTitle: "상점", shopSubtitle: "게이밍 액세서리", viewProduct: "상품 보기", buyNow: "구매", features: "특징", pricing: "가격", moreFrom: "더보기", download: "다운로드", downloadNow: "지금 다운로드", systemRequirements: "시스템 요구사항", minimum: "최소", recommended: "권장", screenshots: "스크린샷", popularGames: "인기 게임", recentGames: "최신 게임", allCategories: "모든 카테고리", freeDownload: "무료 다운로드" },
    footer: { categories: "카테고리", legal: "법적 고지", company: "회사", privacy: "개인정보", terms: "이용약관", about: "소개", contact: "문의", rights: "모든 권리 보유.", description: "무료 PC 게임 다운로드.", rss: "RSS" },
  },
  ja: {
    nav: { action: "アクション", adventure: "アドベンチャー", horror: "ホラー", indie: "インディー", openworld: "オープンワールド", simulation: "シミュレーション", sports: "スポーツ", shooter: "シューター", strategy: "ストラテジー", shop: "ショップ" },
    hero: { title: "ダウンロード ", titleHighlight: "無料PCゲーム", subtitle: "最新ゲームを無料でダウンロード。" },
    common: { latestPicks: "最新ゲーム", browseByCategory: "ジャンル別", minRead: "分", loadMore: "もっと見る", relatedPosts: "関連ゲーム", readMore: "続きを読む", backToHome: "ホームへ", postNotFound: "ゲームが見つかりません", categoryNotFound: "カテゴリが見つかりません", tableOfContents: "目次", advertisement: "広告", shopTitle: "ショップ", shopSubtitle: "ゲーミングアクセサリー", viewProduct: "商品を見る", buyNow: "購入", features: "特徴", pricing: "価格", moreFrom: "もっと", download: "ダウンロード", downloadNow: "今すぐダウンロード", systemRequirements: "システム要件", minimum: "最低", recommended: "推奨", screenshots: "スクリーンショット", popularGames: "人気ゲーム", recentGames: "新着ゲーム", allCategories: "全カテゴリ", freeDownload: "無料ダウンロード" },
    footer: { categories: "カテゴリ", legal: "法的情報", company: "会社", privacy: "プライバシー", terms: "利用規約", about: "会社概要", contact: "お問い合わせ", rights: "全著作権所有。", description: "無料PCゲームダウンロード。", rss: "RSS" },
  },
  hi: {
    nav: { action: "एक्शन", adventure: "एडवेंचर", horror: "हॉरर", indie: "इंडी", openworld: "ओपन वर्ल्ड", simulation: "सिमुलेशन", sports: "स्पोर्ट्स", shooter: "शूटर", strategy: "स्ट्रैटेजी", shop: "दुकान" },
    hero: { title: "डाउनलोड करें ", titleHighlight: "मुफ्त PC गेम्स", subtitle: "नवीनतम गेम्स मुफ्त डाउनलोड के लिए उपलब्ध।" },
    common: { latestPicks: "नवीनतम गेम्स", browseByCategory: "शैली के अनुसार", minRead: "मिनट", loadMore: "और लोड करें", relatedPosts: "संबंधित गेम्स", readMore: "और पढ़ें", backToHome: "होम पर वापस", postNotFound: "गेम नहीं मिला", categoryNotFound: "श्रेणी नहीं मिली", tableOfContents: "विषय सूची", advertisement: "विज्ञापन", shopTitle: "दुकान", shopSubtitle: "गेमिंग एक्सेसरीज", viewProduct: "उत्पाद देखें", buyNow: "खरीदें", features: "विशेषताएं", pricing: "मूल्य", moreFrom: "और", download: "डाउनलोड", downloadNow: "अभी डाउनलोड करें", systemRequirements: "सिस्टम आवश्यकताएं", minimum: "न्यूनतम", recommended: "अनुशंसित", screenshots: "स्क्रीनशॉट", popularGames: "लोकप्रिय गेम्स", recentGames: "हाल के गेम्स", allCategories: "सभी श्रेणियां", freeDownload: "मुफ्त डाउनलोड" },
    footer: { categories: "श्रेणियां", legal: "कानूनी", company: "कंपनी", privacy: "गोपनीयता", terms: "शर्तें", about: "हमारे बारे में", contact: "संपर्क करें", rights: "सर्वाधिकार सुरक्षित।", description: "मुफ्त PC गेम डाउनलोड।", rss: "RSS" },
  },
  bn: {
    nav: { action: "অ্যাকশন", adventure: "অ্যাডভেঞ্চার", horror: "হরর", indie: "ইন্ডি", openworld: "ওপেন ওয়ার্ল্ড", simulation: "সিমুলেশন", sports: "স্পোর্টস", shooter: "শুটার", strategy: "স্ট্র্যাটেজি", shop: "দোকান" },
    hero: { title: "ডাউনলোড করুন ", titleHighlight: "বিনামূল্যে PC গেমস", subtitle: "সর্বশেষ গেমগুলি বিনামূল্যে ডাউনলোডের জন্য উপলব্ধ।" },
    common: { latestPicks: "সর্বশেষ গেমস", browseByCategory: "ধরন অনুযায়ী ব্রাউজ করুন", minRead: "মিনিট", loadMore: "আরো লোড করুন", relatedPosts: "সম্পর্কিত গেমস", readMore: "আরো পড়ুন", backToHome: "হোমে ফিরুন", postNotFound: "গেম পাওয়া যায়নি", categoryNotFound: "বিভাগ পাওয়া যায়নি", tableOfContents: "সূচিপত্র", advertisement: "বিজ্ঞাপন", shopTitle: "দোকান", shopSubtitle: "গেমিং আনুষঙ্গিক", viewProduct: "পণ্য দেখুন", buyNow: "কিনুন", features: "বৈশিষ্ট্য", pricing: "মূল্য", moreFrom: "আরো", download: "ডাউনলোড", downloadNow: "এখনই ডাউনলোড করুন", systemRequirements: "সিস্টেম প্রয়োজনীয়তা", minimum: "সর্বনিম্ন", recommended: "প্রস্তাবিত", screenshots: "স্ক্রিনশট", popularGames: "জনপ্রিয় গেমস", recentGames: "সাম্প্রতিক গেমস", allCategories: "সকল বিভাগ", freeDownload: "বিনামূল্যে ডাউনলোড" },
    footer: { categories: "বিভাগ", legal: "আইনি", company: "কোম্পানি", privacy: "গোপনীয়তা", terms: "শর্তাবলী", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত।", description: "বিনামূল্যে PC গেম ডাউনলোড।", rss: "RSS" },
  },
  ro: {
    nav: { action: "Acțiune", adventure: "Aventură", horror: "Horror", indie: "Indie", openworld: "Lume Deschisă", simulation: "Simulare", sports: "Sport", shooter: "Shooter", strategy: "Strategie", shop: "Magazin" },
    hero: { title: "Descarcă ", titleHighlight: "Jocuri PC Gratuite", subtitle: "Cele mai noi jocuri disponibile gratuit." },
    common: { latestPicks: "Cele Mai Noi Jocuri", browseByCategory: "Navighează după gen", minRead: "min", loadMore: "Mai multe", relatedPosts: "Jocuri similare", readMore: "Citește mai mult", backToHome: "Înapoi", postNotFound: "Jocul nu a fost găsit", categoryNotFound: "Categorie negăsită", tableOfContents: "Cuprins", advertisement: "Reclamă", shopTitle: "Magazin", shopSubtitle: "Accesorii gaming", viewProduct: "Vezi produs", buyNow: "Cumpără", features: "Caracteristici", pricing: "Preț", moreFrom: "Mai mult", download: "Descarcă", downloadNow: "Descarcă acum", systemRequirements: "Cerințe de sistem", minimum: "Minime", recommended: "Recomandate", screenshots: "Capturi de ecran", popularGames: "Jocuri populare", recentGames: "Jocuri recente", allCategories: "Toate categoriile", freeDownload: "Descărcare gratuită" },
    footer: { categories: "Categorii", legal: "Legal", company: "Companie", privacy: "Confidențialitate", terms: "Termeni", about: "Despre noi", contact: "Contact", rights: "Toate drepturile rezervate.", description: "Descărcări gratuite de jocuri PC.", rss: "RSS" },
  },
  cs: {
    nav: { action: "Akční", adventure: "Dobrodružné", horror: "Horor", indie: "Indie", openworld: "Otevřený Svět", simulation: "Simulace", sports: "Sport", shooter: "Střílečky", strategy: "Strategie", shop: "Obchod" },
    hero: { title: "Stáhnout ", titleHighlight: "PC hry zdarma", subtitle: "Nejnovější hry ke stažení zdarma." },
    common: { latestPicks: "Nejnovější hry", browseByCategory: "Procházet podle žánru", minRead: "min", loadMore: "Načíst více", relatedPosts: "Podobné hry", readMore: "Číst dál", backToHome: "Zpět", postNotFound: "Hra nenalezena", categoryNotFound: "Kategorie nenalezena", tableOfContents: "Obsah", advertisement: "Reklama", shopTitle: "Obchod", shopSubtitle: "Herní příslušenství", viewProduct: "Zobrazit", buyNow: "Koupit", features: "Funkce", pricing: "Cena", moreFrom: "Více", download: "Stáhnout", downloadNow: "Stáhnout nyní", systemRequirements: "Systémové požadavky", minimum: "Minimální", recommended: "Doporučené", screenshots: "Snímky obrazovky", popularGames: "Populární hry", recentGames: "Nové hry", allCategories: "Všechny kategorie", freeDownload: "Stáhnout zdarma" },
    footer: { categories: "Kategorie", legal: "Právní", company: "Společnost", privacy: "Soukromí", terms: "Podmínky", about: "O nás", contact: "Kontakt", rights: "Všechna práva vyhrazena.", description: "Stahování PC her zdarma.", rss: "RSS" },
  },
  hu: {
    nav: { action: "Akció", adventure: "Kaland", horror: "Horror", indie: "Indie", openworld: "Nyílt Világ", simulation: "Szimuláció", sports: "Sport", shooter: "Lövöldözős", strategy: "Stratégia", shop: "Bolt" },
    hero: { title: "Töltsd le a ", titleHighlight: "Ingyenes PC Játékokat", subtitle: "A legújabb játékok ingyenesen letölthetők." },
    common: { latestPicks: "Legújabb Játékok", browseByCategory: "Műfaj szerint", minRead: "perc", loadMore: "Továbbiak", relatedPosts: "Kapcsolódó játékok", readMore: "Tovább", backToHome: "Vissza", postNotFound: "Játék nem található", categoryNotFound: "Kategória nem található", tableOfContents: "Tartalomjegyzék", advertisement: "Hirdetés", shopTitle: "Bolt", shopSubtitle: "Gaming kiegészítők", viewProduct: "Termék megtekintése", buyNow: "Vásárlás", features: "Jellemzők", pricing: "Ár", moreFrom: "Még több", download: "Letöltés", downloadNow: "Letöltés most", systemRequirements: "Rendszerkövetelmények", minimum: "Minimális", recommended: "Ajánlott", screenshots: "Képernyőképek", popularGames: "Népszerű játékok", recentGames: "Legújabb játékok", allCategories: "Minden kategória", freeDownload: "Ingyenes letöltés" },
    footer: { categories: "Kategóriák", legal: "Jogi", company: "Cég", privacy: "Adatvédelem", terms: "Feltételek", about: "Rólunk", contact: "Kapcsolat", rights: "Minden jog fenntartva.", description: "Ingyenes PC játék letöltések.", rss: "RSS" },
  },
  el: {
    nav: { action: "Δράση", adventure: "Περιπέτεια", horror: "Τρόμος", indie: "Indie", openworld: "Ανοιχτός Κόσμος", simulation: "Προσομοίωση", sports: "Αθλητικά", shooter: "Shooter", strategy: "Στρατηγική", shop: "Κατάστημα" },
    hero: { title: "Κατέβασε ", titleHighlight: "Δωρεάν PC Παιχνίδια", subtitle: "Τα τελευταία παιχνίδια διαθέσιμα για δωρεάν λήψη." },
    common: { latestPicks: "Τελευταία Παιχνίδια", browseByCategory: "Ανά είδος", minRead: "λεπτά", loadMore: "Φόρτωση", relatedPosts: "Σχετικά παιχνίδια", readMore: "Διαβάστε περισσότερα", backToHome: "Αρχική", postNotFound: "Δεν βρέθηκε", categoryNotFound: "Κατηγορία δεν βρέθηκε", tableOfContents: "Πίνακας Περιεχομένων", advertisement: "Διαφήμιση", shopTitle: "Κατάστημα", shopSubtitle: "Gaming αξεσουάρ", viewProduct: "Προβολή", buyNow: "Αγορά", features: "Χαρακτηριστικά", pricing: "Τιμή", moreFrom: "Περισσότερα", download: "Λήψη", downloadNow: "Λήψη τώρα", systemRequirements: "Απαιτήσεις συστήματος", minimum: "Ελάχιστες", recommended: "Συνιστώμενες", screenshots: "Στιγμιότυπα", popularGames: "Δημοφιλή παιχνίδια", recentGames: "Πρόσφατα παιχνίδια", allCategories: "Όλες οι κατηγορίες", freeDownload: "Δωρεάν λήψη" },
    footer: { categories: "Κατηγορίες", legal: "Νομικά", company: "Εταιρεία", privacy: "Απόρρητο", terms: "Όροι", about: "Σχετικά", contact: "Επικοινωνία", rights: "Με επιφύλαξη παντός δικαιώματος.", description: "Δωρεάν λήψεις PC παιχνιδιών.", rss: "RSS" },
  },
  da: {
    nav: { action: "Action", adventure: "Eventyr", horror: "Gyser", indie: "Indie", openworld: "Åben Verden", simulation: "Simulation", sports: "Sport", shooter: "Shooter", strategy: "Strategi", shop: "Butik" },
    hero: { title: "Download ", titleHighlight: "Gratis PC Spil", subtitle: "De nyeste spil tilgængelige til gratis download." },
    common: { latestPicks: "Nyeste Spil", browseByCategory: "Gennemse efter genre", minRead: "min", loadMore: "Indlæs mere", relatedPosts: "Relaterede spil", readMore: "Læs mere", backToHome: "Tilbage", postNotFound: "Spil ikke fundet", categoryNotFound: "Kategori ikke fundet", tableOfContents: "Indholdsfortegnelse", advertisement: "Reklame", shopTitle: "Butik", shopSubtitle: "Gaming tilbehør", viewProduct: "Se produkt", buyNow: "Køb", features: "Funktioner", pricing: "Pris", moreFrom: "Mere", download: "Download", downloadNow: "Download nu", systemRequirements: "Systemkrav", minimum: "Minimum", recommended: "Anbefalet", screenshots: "Skærmbilleder", popularGames: "Populære spil", recentGames: "Seneste spil", allCategories: "Alle kategorier", freeDownload: "Gratis download" },
    footer: { categories: "Kategorier", legal: "Juridisk", company: "Virksomhed", privacy: "Privatliv", terms: "Vilkår", about: "Om os", contact: "Kontakt", rights: "Alle rettigheder forbeholdes.", description: "Gratis PC-spil downloads.", rss: "RSS" },
  },
  fi: {
    nav: { action: "Toiminta", adventure: "Seikkailu", horror: "Kauhu", indie: "Indie", openworld: "Avoin Maailma", simulation: "Simulaatio", sports: "Urheilu", shooter: "Räiskintä", strategy: "Strategia", shop: "Kauppa" },
    hero: { title: "Lataa ", titleHighlight: "Ilmaisia PC-pelejä", subtitle: "Uusimmat pelit ladattavissa ilmaiseksi." },
    common: { latestPicks: "Uusimmat Pelit", browseByCategory: "Selaa genren mukaan", minRead: "min", loadMore: "Lataa lisää", relatedPosts: "Samankaltaiset pelit", readMore: "Lue lisää", backToHome: "Takaisin", postNotFound: "Peliä ei löydy", categoryNotFound: "Kategoriaa ei löydy", tableOfContents: "Sisällysluettelo", advertisement: "Mainos", shopTitle: "Kauppa", shopSubtitle: "Pelitarvikkeet", viewProduct: "Näytä tuote", buyNow: "Osta", features: "Ominaisuudet", pricing: "Hinta", moreFrom: "Lisää", download: "Lataa", downloadNow: "Lataa nyt", systemRequirements: "Järjestelmävaatimukset", minimum: "Vähimmäis", recommended: "Suositeltu", screenshots: "Kuvakaappaukset", popularGames: "Suositut pelit", recentGames: "Uusimmat pelit", allCategories: "Kaikki kategoriat", freeDownload: "Ilmainen lataus" },
    footer: { categories: "Kategoriat", legal: "Oikeudelliset", company: "Yritys", privacy: "Tietosuoja", terms: "Ehdot", about: "Meistä", contact: "Yhteystiedot", rights: "Kaikki oikeudet pidätetään.", description: "Ilmaisia PC-pelien latauksia.", rss: "RSS" },
  },
  sk: {
    nav: { action: "Akčné", adventure: "Dobrodružné", horror: "Horor", indie: "Indie", openworld: "Otvorený Svet", simulation: "Simulácia", sports: "Šport", shooter: "Strieľačky", strategy: "Stratégia", shop: "Obchod" },
    hero: { title: "Stiahnuť ", titleHighlight: "PC hry zadarmo", subtitle: "Najnovšie hry na stiahnutie zadarmo." },
    common: { latestPicks: "Najnovšie hry", browseByCategory: "Podľa žánru", minRead: "min", loadMore: "Načítať viac", relatedPosts: "Podobné hry", readMore: "Čítať ďalej", backToHome: "Späť", postNotFound: "Hra nenájdená", categoryNotFound: "Kategória nenájdená", tableOfContents: "Obsah", advertisement: "Reklama", shopTitle: "Obchod", shopSubtitle: "Herné príslušenstvo", viewProduct: "Zobraziť", buyNow: "Kúpiť", features: "Funkcie", pricing: "Cena", moreFrom: "Viac", download: "Stiahnuť", downloadNow: "Stiahnuť teraz", systemRequirements: "Systémové požiadavky", minimum: "Minimálne", recommended: "Odporúčané", screenshots: "Snímky obrazovky", popularGames: "Populárne hry", recentGames: "Nové hry", allCategories: "Všetky kategórie", freeDownload: "Stiahnuť zadarmo" },
    footer: { categories: "Kategórie", legal: "Právne", company: "Spoločnosť", privacy: "Súkromie", terms: "Podmienky", about: "O nás", contact: "Kontakt", rights: "Všetky práva vyhradené.", description: "Sťahovanie PC hier zadarmo.", rss: "RSS" },
  },
  bg: {
    nav: { action: "Екшън", adventure: "Приключение", horror: "Хорър", indie: "Инди", openworld: "Отворен Свят", simulation: "Симулация", sports: "Спорт", shooter: "Шутър", strategy: "Стратегия", shop: "Магазин" },
    hero: { title: "Изтегли ", titleHighlight: "Безплатни PC Игри", subtitle: "Най-новите игри за безплатно изтегляне." },
    common: { latestPicks: "Последни Игри", browseByCategory: "По жанр", minRead: "мин", loadMore: "Зареди още", relatedPosts: "Подобни игри", readMore: "Прочети повече", backToHome: "Начало", postNotFound: "Играта не е намерена", categoryNotFound: "Категорията не е намерена", tableOfContents: "Съдържание", advertisement: "Реклама", shopTitle: "Магазин", shopSubtitle: "Гейминг аксесоари", viewProduct: "Виж", buyNow: "Купи", features: "Характеристики", pricing: "Цена", moreFrom: "Още", download: "Изтегли", downloadNow: "Изтегли сега", systemRequirements: "Системни изисквания", minimum: "Минимални", recommended: "Препоръчителни", screenshots: "Екранни снимки", popularGames: "Популярни игри", recentGames: "Нови игри", allCategories: "Всички категории", freeDownload: "Безплатно изтегляне" },
    footer: { categories: "Категории", legal: "Правна информация", company: "Компания", privacy: "Поверителност", terms: "Условия", about: "За нас", contact: "Контакт", rights: "Всички права запазени.", description: "Безплатни PC игри за изтегляне.", rss: "RSS" },
  },
  uk: {
    nav: { action: "Екшн", adventure: "Пригоди", horror: "Жахи", indie: "Інді", openworld: "Відкритий Світ", simulation: "Симулятор", sports: "Спорт", shooter: "Шутер", strategy: "Стратегія", shop: "Магазин" },
    hero: { title: "Завантажити ", titleHighlight: "Безкоштовні PC Ігри", subtitle: "Найновіші ігри для безкоштовного завантаження." },
    common: { latestPicks: "Нові Ігри", browseByCategory: "За жанром", minRead: "хв", loadMore: "Завантажити ще", relatedPosts: "Схожі ігри", readMore: "Читати далі", backToHome: "На головну", postNotFound: "Гру не знайдено", categoryNotFound: "Категорію не знайдено", tableOfContents: "Зміст", advertisement: "Реклама", shopTitle: "Магазин", shopSubtitle: "Ігрові аксесуари", viewProduct: "Переглянути", buyNow: "Купити", features: "Особливості", pricing: "Ціна", moreFrom: "Ще", download: "Завантажити", downloadNow: "Завантажити зараз", systemRequirements: "Системні вимоги", minimum: "Мінімальні", recommended: "Рекомендовані", screenshots: "Скріншоти", popularGames: "Популярні ігри", recentGames: "Нові ігри", allCategories: "Усі категорії", freeDownload: "Безкоштовно" },
    footer: { categories: "Категорії", legal: "Правова інформація", company: "Компанія", privacy: "Конфіденційність", terms: "Умови", about: "Про нас", contact: "Контакти", rights: "Усі права захищені.", description: "Безкоштовні завантаження ігор для ПК.", rss: "RSS" },
  },
  sr: {
    nav: { action: "Акција", adventure: "Авантура", horror: "Хорор", indie: "Инди", openworld: "Отворени Свет", simulation: "Симулација", sports: "Спорт", shooter: "Пуцачина", strategy: "Стратегија", shop: "Продавница" },
    hero: { title: "Преузми ", titleHighlight: "Бесплатне PC Игре", subtitle: "Најновије игре за бесплатно преузимање." },
    common: { latestPicks: "Најновије Игре", browseByCategory: "По жанру", minRead: "мин", loadMore: "Учитај још", relatedPosts: "Сличне игре", readMore: "Прочитај више", backToHome: "Назад", postNotFound: "Игра није пронађена", categoryNotFound: "Категорија није пронађена", tableOfContents: "Садржај", advertisement: "Реклама", shopTitle: "Продавница", shopSubtitle: "Гејминг опрема", viewProduct: "Погледај", buyNow: "Купи", features: "Карактеристике", pricing: "Цена", moreFrom: "Још", download: "Преузми", downloadNow: "Преузми сада", systemRequirements: "Системски захтеви", minimum: "Минимални", recommended: "Препоручени", screenshots: "Снимци екрана", popularGames: "Популарне игре", recentGames: "Нове игре", allCategories: "Све категорије", freeDownload: "Бесплатно преузимање" },
    footer: { categories: "Категорије", legal: "Правно", company: "Компанија", privacy: "Приватност", terms: "Услови", about: "О нама", contact: "Контакт", rights: "Сва права задржана.", description: "Бесплатне PC игре за преузимање.", rss: "RSS" },
  },
  ms: {
    nav: { action: "Aksi", adventure: "Pengembaraan", horror: "Seram", indie: "Indie", openworld: "Dunia Terbuka", simulation: "Simulasi", sports: "Sukan", shooter: "Penembak", strategy: "Strategi", shop: "Kedai" },
    hero: { title: "Muat Turun ", titleHighlight: "Permainan PC Percuma", subtitle: "Permainan terkini untuk dimuat turun secara percuma." },
    common: { latestPicks: "Permainan Terkini", browseByCategory: "Layari mengikut genre", minRead: "min", loadMore: "Muat lagi", relatedPosts: "Permainan berkaitan", readMore: "Baca lagi", backToHome: "Kembali", postNotFound: "Permainan tidak dijumpai", categoryNotFound: "Kategori tidak dijumpai", tableOfContents: "Kandungan", advertisement: "Iklan", shopTitle: "Kedai", shopSubtitle: "Aksesori gaming", viewProduct: "Lihat produk", buyNow: "Beli", features: "Ciri-ciri", pricing: "Harga", moreFrom: "Lagi", download: "Muat turun", downloadNow: "Muat turun sekarang", systemRequirements: "Keperluan sistem", minimum: "Minimum", recommended: "Disyorkan", screenshots: "Tangkapan skrin", popularGames: "Permainan popular", recentGames: "Permainan terkini", allCategories: "Semua kategori", freeDownload: "Muat turun percuma" },
    footer: { categories: "Kategori", legal: "Undang-undang", company: "Syarikat", privacy: "Privasi", terms: "Terma", about: "Tentang kami", contact: "Hubungi kami", rights: "Hak cipta terpelihara.", description: "Muat turun permainan PC percuma.", rss: "RSS" },
  },
  fil: {
    nav: { action: "Aksyon", adventure: "Pakikipagsapalaran", horror: "Horror", indie: "Indie", openworld: "Open World", simulation: "Simulation", sports: "Sports", shooter: "Shooter", strategy: "Estratehiya", shop: "Tindahan" },
    hero: { title: "I-download ang ", titleHighlight: "Libreng PC Games", subtitle: "Ang pinakabagong laro para sa libreng pag-download." },
    common: { latestPicks: "Pinakabagong Laro", browseByCategory: "I-browse ayon sa genre", minRead: "min", loadMore: "Magdagdag pa", relatedPosts: "Kaugnay na laro", readMore: "Magbasa pa", backToHome: "Bumalik", postNotFound: "Hindi nahanap ang laro", categoryNotFound: "Hindi nahanap ang kategorya", tableOfContents: "Talaan ng Nilalaman", advertisement: "Advertisement", shopTitle: "Tindahan", shopSubtitle: "Gaming accessories", viewProduct: "Tingnan", buyNow: "Bilhin", features: "Mga tampok", pricing: "Presyo", moreFrom: "Iba pa", download: "I-download", downloadNow: "I-download ngayon", systemRequirements: "System requirements", minimum: "Minimum", recommended: "Recommended", screenshots: "Screenshots", popularGames: "Sikat na laro", recentGames: "Bagong laro", allCategories: "Lahat ng kategorya", freeDownload: "Libreng download" },
    footer: { categories: "Mga Kategorya", legal: "Legal", company: "Kompanya", privacy: "Privacy", terms: "Mga Tuntunin", about: "Tungkol sa amin", contact: "Makipag-ugnayan", rights: "Lahat ng karapatan ay nakalaan.", description: "Libreng PC game downloads.", rss: "RSS" },
  },
  he: {
    nav: { action: "אקשן", adventure: "הרפתקאות", horror: "אימה", indie: "אינדי", openworld: "עולם פתוח", simulation: "סימולציה", sports: "ספורט", shooter: "יורה", strategy: "אסטרטגיה", shop: "חנות" },
    hero: { title: "הורד ", titleHighlight: "משחקי PC בחינם", subtitle: "המשחקים החדשים ביותר להורדה בחינם." },
    common: { latestPicks: "משחקים אחרונים", browseByCategory: "לפי ז'אנר", minRead: "דקות", loadMore: "טען עוד", relatedPosts: "משחקים קשורים", readMore: "קרא עוד", backToHome: "חזרה", postNotFound: "המשחק לא נמצא", categoryNotFound: "הקטגוריה לא נמצאה", tableOfContents: "תוכן עניינים", advertisement: "פרסומת", shopTitle: "חנות", shopSubtitle: "אביזרי גיימינג", viewProduct: "צפה במוצר", buyNow: "קנה", features: "תכונות", pricing: "מחיר", moreFrom: "עוד", download: "הורדה", downloadNow: "הורד עכשיו", systemRequirements: "דרישות מערכת", minimum: "מינימום", recommended: "מומלץ", screenshots: "צילומי מסך", popularGames: "משחקים פופולריים", recentGames: "משחקים אחרונים", allCategories: "כל הקטגוריות", freeDownload: "הורדה חינם" },
    footer: { categories: "קטגוריות", legal: "משפטי", company: "חברה", privacy: "פרטיות", terms: "תנאים", about: "אודות", contact: "צור קשר", rights: "כל הזכויות שמורות.", description: "הורדות משחקי PC בחינם.", rss: "RSS" },
  },
  fa: {
    nav: { action: "اکشن", adventure: "ماجراجویی", horror: "ترسناک", indie: "ایندی", openworld: "جهان باز", simulation: "شبیه‌سازی", sports: "ورزشی", shooter: "تیراندازی", strategy: "استراتژی", shop: "فروشگاه" },
    hero: { title: "دانلود ", titleHighlight: "بازی‌های رایگان PC", subtitle: "جدیدترین بازی‌ها برای دانلود رایگان." },
    common: { latestPicks: "جدیدترین بازی‌ها", browseByCategory: "بر اساس ژانر", minRead: "دقیقه", loadMore: "بیشتر", relatedPosts: "بازی‌های مشابه", readMore: "بیشتر بخوانید", backToHome: "بازگشت", postNotFound: "بازی یافت نشد", categoryNotFound: "دسته‌بندی یافت نشد", tableOfContents: "فهرست", advertisement: "تبلیغات", shopTitle: "فروشگاه", shopSubtitle: "لوازم جانبی گیمینگ", viewProduct: "مشاهده", buyNow: "خرید", features: "ویژگی‌ها", pricing: "قیمت", moreFrom: "بیشتر", download: "دانلود", downloadNow: "دانلود کنید", systemRequirements: "نیازمندی‌های سیستم", minimum: "حداقل", recommended: "پیشنهادی", screenshots: "تصاویر", popularGames: "بازی‌های محبوب", recentGames: "بازی‌های جدید", allCategories: "همه دسته‌بندی‌ها", freeDownload: "دانلود رایگان" },
    footer: { categories: "دسته‌بندی‌ها", legal: "حقوقی", company: "شرکت", privacy: "حریم خصوصی", terms: "شرایط", about: "درباره ما", contact: "تماس", rights: "تمامی حقوق محفوظ است.", description: "دانلود بازی‌های رایگان PC.", rss: "RSS" },
  },
  hr: {
    nav: { action: "Akcija", adventure: "Avantura", horror: "Horor", indie: "Indie", openworld: "Otvoreni Svijet", simulation: "Simulacija", sports: "Sport", shooter: "Pucačina", strategy: "Strategija", shop: "Trgovina" },
    hero: { title: "Preuzmi ", titleHighlight: "Besplatne PC Igre", subtitle: "Najnovije igre za besplatno preuzimanje." },
    common: { latestPicks: "Najnovije Igre", browseByCategory: "Po žanru", minRead: "min", loadMore: "Učitaj više", relatedPosts: "Slične igre", readMore: "Čitaj dalje", backToHome: "Natrag", postNotFound: "Igra nije pronađena", categoryNotFound: "Kategorija nije pronađena", tableOfContents: "Sadržaj", advertisement: "Oglas", shopTitle: "Trgovina", shopSubtitle: "Gaming oprema", viewProduct: "Pogledaj", buyNow: "Kupi", features: "Značajke", pricing: "Cijena", moreFrom: "Više", download: "Preuzmi", downloadNow: "Preuzmi sada", systemRequirements: "Sistemski zahtjevi", minimum: "Minimalni", recommended: "Preporučeni", screenshots: "Snimke zaslona", popularGames: "Popularne igre", recentGames: "Nove igre", allCategories: "Sve kategorije", freeDownload: "Besplatno preuzimanje" },
    footer: { categories: "Kategorije", legal: "Pravno", company: "Tvrtka", privacy: "Privatnost", terms: "Uvjeti", about: "O nama", contact: "Kontakt", rights: "Sva prava pridržana.", description: "Besplatne PC igre za preuzimanje.", rss: "RSS" },
  },
};
