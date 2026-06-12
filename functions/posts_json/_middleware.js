export async function onRequest(context) {
  const { request, env, waitUntil } = context;
  const cacheKey = new URL(request.url).pathname;

  if (env.CACHE_KV) {
    try {
      const cached = await env.CACHE_KV.get(cacheKey);
      if (cached) {
        return new Response(cached, {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
            'X-Cache': 'HIT-KV',
          },
        });
      }
    } catch (e) {}
  }

  const response = await context.next();

  if (response.ok && env.CACHE_KV) {
    try {
      const body = await response.clone().text();
      waitUntil(env.CACHE_KV.put(cacheKey, body, { expirationTtl: 7200 }));
    } catch (e) {}
  }

  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  headers.set('Content-Type', 'application/json');
  headers.set('X-Cache', 'MISS');

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}
