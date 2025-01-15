module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000', // React geliştirme ortamı için
        'https://hotelfinderfrontend-production.up.railway.app', // Frontend üretim ortamı
        'https://hotelfinderbackend-production.up.railway.app', // Backend üretim ortamı
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // İzin verilen HTTP metodları
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
      ],
      keepHeadersOnError: true, // Hata durumunda bile başlıkları eklemeye devam et
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
