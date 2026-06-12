/**
 * Cloudflare Pages Worker - Cache API (no KV needed)
 * Uses built-in Cloudflare Cache API for edge caching
 */

export async function onRequest(context) {
  const { request, next } = context;

  if (request.method !== 'GET') {
    return next();
  }

  const url = new URL(request.url);
  const path = url.pathname;

  // Cache JSON data (posts_json)
  if (path.startsWith('/posts_json/')) {
    return handleCache(request, next, 'json', 3600);
  }

  // Cache sitemaps
  if (path.match(/^\/sitemap(_index|_[a-z]{2}_\d+)?\.xml$/)) {
    return handleCache(request, next, 'sitemap', 86400);
  }

  // Cache robots.txt
  if (path === '/robots.txt') {
    return handleCache(request, next, 'text', 3600);
  }

  // Everything else: pass through to Pages normally
  return next();
}

async function handleCache(request, next, type, ttl) {
  const cache = caches.default;
  const cached = await cache.match(request);

  if (cached) {
    const response = new Response(cached.body, cached);
    response.headers.set('X-Cache', 'HIT');
    return response;
  }

  const response = await next();

  if (response.ok) {
    const headers = new Headers(response.headers);
    headers.set('Cache-Control', `public, max-age=${ttl}, stale-while-revalidate=${ttl * 24}`);
    headers.set('X-Cache', 'MISS');

    const cacheableResponse = new Response(response.body, {
      status: response.status,
      headers,
    });

    context.waitUntil(cache.put(request, cacheableResponse.clone()));
    return cacheableResponse;
  }

  return response;
}
