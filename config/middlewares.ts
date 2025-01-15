export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'], // API bağlantıları için
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
        'https://<frontend-domain>.railway.app', // Railway'deki frontend uygulamanız
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // İzin verilen HTTP metodları
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'], // İzin verilen başlıklar
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
