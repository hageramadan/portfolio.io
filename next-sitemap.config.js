/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-io-xu1h.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,


  exclude: ['/admin/*', '/api/*', '/404', '/_not-found'],


  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',

      },
    ],
  },

  additionalSitemaps: [
    'https://portfolio-io-xu1h.vercel.app/server-sitemap.xml',
  ],


  transform: async (config, path) => {

    if (path.includes('/private') || path.includes('/admin')) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
