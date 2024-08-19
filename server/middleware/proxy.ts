import { join } from 'node:path';

export default defineEventHandler((event) => {
  try {
    const url = getRequestURL(event);

    if (url.pathname.startsWith('/cdn')) {
      const resetPath = url.pathname.replace('/cdn', '');
      return proxyRequest(event, join('http://shared_network:8000', resetPath));
    }
  } catch (e) {
    event.node.res.statusCode = 500;
    event.node.res.end('[Nuxt Proxy Middleware]: Internal Server Error');
  }
});
