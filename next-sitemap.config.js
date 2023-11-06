/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://v-bragilev.ru/',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/bitrix/components/',
      },
      {
        userAgent: '*',
        allow: '/bitrix/cache/',
      },
      {
        userAgent: '*',
        allow: '/bitrix/js/',
      },
      {
        userAgent: '*',
        allow: '/bitrix/templates/',
      },
      {
        userAgent: '*',
        allow: ' /bitrix/panel/',
      },
      {
        userAgent: '*',
        disallow: '*/index.php',
      },
      {
        userAgent: '*',
        disallow: '/*?',
      },
      {
        userAgent: '*',
        disallow: '/*&',
      },
      {
        userAgent: '*',
        disallow: '/*.pdf',
      },
    ],
    additionalSitemaps: ['https://v-bragilev.ru/sitemap.xml'],
  },
}
