import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const productsGaliyukApi = new Route(
  ({ url }) => url.href.startsWith('https://'),
  new StaleWhileRevalidate({
    cacheName: 'products-galiyuk-api',
  }),
);

const productsgaliyukImageApi = new Route(
  ({ url }) => url.href.startsWith('https://'),
  new StaleWhileRevalidate({
    cacheName: 'products-galiyuk-image-api',
  }),
);

registerRoute(productsGaliyukApi);
registerRoute(productsgaliyukImageApi);
