/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://v-bragilev.ru/',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/' },
      {
        userAgent: '*',
        allow: [
          '/bitrix/components/',
          '/bitrix/cache/',
          '/bitrix/js/',
          '/bitrix/templates/',
          '/bitrix/panel/',
        ],
        disallow: ['*/index.php', '/*?', '/*&', '/*.pdf'],
      },
    ],
    additionalSitemaps: ['https://v-bragilev.ru/sitemap.xml'],
  },
}
