@'export async function onRequest(context) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method !== 'GET') {
    return env.ASSETS.fetch(request);
  }

  if (path.startsWith('/posts_json/')) {
    return handleKV(context, path, 3600);
  }

  if (path.match(/^\/sitemap(_index|_[a-z]{2}_\d+)?\.xml$/)) {
    return handleKV(context, path, 86400);
  }

  if (path === '/robots.txt') {
    return handleKV(context, path, 3600);
  }

  return env.ASSETS.fetch(request);
}

async function handleKV(context, path, ttl) {
  const { request, env, waitUntil } = context;

  if (env.CACHE_KV) {
    try {
      const cached = await env.CACHE_KV.get(path);
      if (cached) {
        const mime = path.endsWith('.json') ? 'application/json' : path.endsWith('.xml') ? 'application/xml' : 'text/plain';
        return new Response(cached, {
          headers: {
            'Content-Type': mime,
            'Cache-Control': 'public, max-age=' + ttl,
            'X-Cache': 'HIT-KV',
          },
        });
      }
    } catch (e) {}
  }

  const response = await env.ASSETS.fetch(request);

  if (response.ok && env.CACHE_KV) {
    try {
      const body = await response.clone().text();
      waitUntil(env.CACHE_KV.put(path, body, { expirationTtl: ttl * 2 }));
    } catch (e) {}
  }

  const mime = path.endsWith('.json') ? 'application/json' : path.endsWith('.xml') ? 'application/xml' : 'text/plain';
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=' + ttl);
  headers.set('Content-Type', mime);
  headers.set('X-Cache', 'MISS');

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}
'@ | Set-Content -LiteralPath "C:\Users\BEBO\Desktop\Site hosting Blog-tools\articles videos site files\tempobet\PcGameArchive-main\PcGameArchive-main\functions\[[catchall]].js"
