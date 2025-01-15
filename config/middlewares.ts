export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:', 'ws:'], // API bağlantıları ve WebSocket'ler için
          'img-src': ["'self'", 'data:', 'blob:'], // Görseller için
          'media-src': ["'self'", 'data:', 'blob:'], // Medya dosyaları için
          upgradeInsecureRequests: null, // HTTP -> HTTPS zorlamasını devre dışı bırakır
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000', // Yerel geliştirme ortamı
        'https://hotelfinderbackend-production.up.railway.app', // Backend domaini
        'hotelfinder-production.up.railway.app', // Frontend domaini (gerekirse doğru URL'yi yazın)
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // İzin verilen HTTP metodları
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Access-Control-Allow-Origin',
      ], // İzin verilen başlıklar
      keepHeadersOnError: true, // Hata durumunda bile CORS başlıklarını eklemeye devam eder
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
