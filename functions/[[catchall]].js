/**
 * Cloudflare Pages Worker with KV Caching
 * 
 * Caches JSON data, static assets, and sitemaps in Cloudflare KV
 * for dramatically faster load times across all edge locations.
 */

export async function onRequest(context) {
  const { request, env, next, waitUntil } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Only cache GET requests
  if (request.method !== 'GET') {
    return next();
  }

  // ========== JSON DATA CACHING (posts_json) ==========
  if (path.startsWith('/posts_json/')) {
    return handleJsonCache(request, env, path);
  }

  // ========== SITEMAP CACHING ==========
  if (path.match(/^\/sitemap(_index|_[a-z]{2}_\d+)?\.xml$/)) {
    return handleSitemapCache(request, env, path);
  }

  // ========== STATIC ASSET CACHING ==========
  if (path.startsWith('/assets/')) {
    return handleAssetCache(request, env, path);
  }

  // ========== ROBOTS.TXT ==========
  if (path === '/robots.txt') {
    return handleRobotsCache(request, env);
  }

  // ========== DEFAULT: Pass through to Pages ==========
  return next();
}

/**
 * Cache JSON data files in KV
 * These are large files (some 70K+ lines) - caching them gives huge speed gains
 */
async function handleJsonCache(request, env, path) {
  const cacheKey = `json:${path}`;
  const ttl = parseInt(env.CACHE_TTL_JSON || '3600'); // 1 hour default

  // Try to get from KV cache
  if (env.CACHE_KV) {
    try {
      const cached = await env.CACHE_KV.get(cacheKey, { type: 'json' });
      if (cached) {
        return new Response(JSON.stringify(cached), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': `public, max-age=${ttl}, stale-while-revalidate=${ttl * 24}`,
            'X-Cache': 'HIT-KV',
            'X-Cache-Key': cacheKey,
          },
        });
      }
    } catch (e) {
      // KV read failed, fall through to origin
    }
  }

  // Fetch from origin (Cloudflare Pages static)
  const response = await fetch(request);
  
  // If successful, cache in KV (fire and forget)
  if (response.ok && env.CACHE_KV) {
    try {
      const data = await response.clone().json();
      waitUntil(
        env.CACHE_KV.put(cacheKey, JSON.stringify(data), { expirationTtl: ttl * 2 })
      );
    } catch (e) {
      // Cache write failed, not critical
    }
  }

  // Add cache headers to response
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', `public, max-age=${ttl}, stale-while-revalidate=${ttl * 24}`);
  newHeaders.set('X-Cache', 'MISS');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}

/**
 * Cache sitemap XML files in KV
 */
async function handleSitemapCache(request, env, path) {
  const cacheKey = `sitemap:${path}`;
  const ttl = parseInt(env.CACHE_TTL_SITEMAP || '86400'); // 24 hours

  if (env.CACHE_KV) {
    try {
      const cached = await env.CACHE_KV.get(cacheKey);
      if (cached) {
        return new Response(cached, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': `public, max-age=${ttl}`,
            'X-Cache': 'HIT-KV',
          },
        });
      }
    } catch (e) {
      // Fall through
    }
  }

  const response = await fetch(request);

  if (response.ok && env.CACHE_KV) {
    try {
      const text = await response.clone().text();
      waitUntil(
        env.CACHE_KV.put(cacheKey, text, { expirationTtl: ttl * 2 })
      );
    } catch (e) {
      // Not critical
    }
  }

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', `public, max-age=${ttl}`);
  newHeaders.set('X-Cache', 'MISS');

  return new Response(response.body, {
    status: response.status,
    headers: newHeaders,
  });
}

/**
 * Cache hashed static assets with immutable headers
 * Vite generates content-hashed filenames, so these can be cached forever
 */
async function handleAssetCache(request, env, path) {
  const ttl = parseInt(env.CACHE_TTL_ASSETS || '31536000'); // 1 year

  const response = await fetch(request);

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', `public, max-age=${ttl}, immutable`);
  newHeaders.set('X-Content-Type-Options', 'nosniff');

  return new Response(response.body, {
    status: response.status,
    headers: newHeaders,
  });
}

/**
 * Cache robots.txt
 */
async function handleRobotsCache(request, env) {
  const cacheKey = 'robots:txt';
  const ttl = 3600; // 1 hour

  if (env.CACHE_KV) {
    try {
      const cached = await env.CACHE_KV.get(cacheKey);
      if (cached) {
        return new Response(cached, {
          headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': `public, max-age=${ttl}`,
            'X-Cache': 'HIT-KV',
          },
        });
      }
    } catch (e) {
      // Fall through
    }
  }

  const response = await fetch(request);

  if (response.ok && env.CACHE_KV) {
    try {
      const text = await response.clone().text();
      waitUntil(
        env.CACHE_KV.put(cacheKey, text, { expirationTtl: ttl * 2 })
      );
    } catch (e) {
      // Not critical
    }
  }

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', `public, max-age=${ttl}`);

  return new Response(response.body, {
    status: response.status,
    headers: newHeaders,
  });
}
