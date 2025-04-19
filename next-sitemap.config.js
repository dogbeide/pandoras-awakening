/** @type {import('next-sitemap').IConfig} */

SITE_URL=process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://www.pandorasawakening.com';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
}