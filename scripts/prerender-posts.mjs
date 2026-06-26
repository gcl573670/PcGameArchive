import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
const postsJsonDir = join(__dirname, 'public', 'posts_json');

// Read the built index.html to extract script/css tags
const builtIndexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

// Extract everything between <body> and </body> from the built index
const bodyMatch = builtIndexHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/);
const bodyContent = bodyMatch ? bodyMatch[1] : '<div id="root"></div>\n<script type="module" src="/src/main.tsx"></script>';

// Extract <head> content after charset/viewport (the meta tags from built index)
const headMatch = builtIndexHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/);
let builtHeadContent = '';
if (headMatch) {
  // Get only the script/link tags (skip meta tags since we'll set our own)
  builtHeadContent = headMatch[1]
    .replace(/<meta[^>]*>/g, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/g, '')
    .trim();
}

const languages = readdirSync(postsJsonDir).filter(f => {
  try { return readdirSync(join(postsJsonDir, f)).some(f2 => f2.endsWith('.json')); } catch { return false; }
});

const categories = ['action', 'adventure', 'horror', 'indie', 'openworld', 'shooter', 'simulation', 'sports', 'strategy'];

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;');
}

let totalFiles = 0;

for (const lang of languages) {
  for (const category of categories) {
    const jsonPath = join(postsJsonDir, lang, `${category}.json`);
    if (!existsSync(jsonPath)) continue;

    let posts;
    try {
      posts = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    } catch { continue; }

    for (const post of posts) {
      const { slug, frontmatter } = post;
      if (!frontmatter?.image) continue;

      const title = escapeHtml(frontmatter.title || '');
      const description = escapeHtml(frontmatter.description || '');
      const image = frontmatter.image;
      const url = `https://pcgamearchive.com/${lang}/game/${slug}`;

      const html = `<!doctype html>
<html lang="en">
<head>
<script>(function(){document.documentElement.classList.add('dark')})();</script>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — Download Free | PcGameArchive</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${url}" />
<meta name="robots" content="index, follow" />

<meta property="og:title" content="${title} — Download Free" />
<meta property="og:description" content="${description}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="PcGameArchive" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@pcgamearchive" />
<meta name="twitter:title" content="${title} — Download Free" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />

<style>
body { margin: 0; background: #0a0a0a; }
#root { min-height: 100vh; }
</style>
${builtHeadContent}
</head>
<body>
${bodyContent}
</body>
</html>`;

      const outDir = join(distDir, lang, 'game', slug);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
      totalFiles++;
    }
  }
}

console.log(`Generated ${totalFiles} prerendered post pages for social media crawlers`);
