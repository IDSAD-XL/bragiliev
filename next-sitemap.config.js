/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_URL
      : process.env.DEV_URL,
  generateRobotsTxt: true, // (optional)
}
