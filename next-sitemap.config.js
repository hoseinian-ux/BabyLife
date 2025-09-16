/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.example.com', // آدرس سایت شما
  generateRobotsTxt: true,            // تولید خودکار robots.txt
  changefreq: 'daily',                // فرکانس تغییر صفحات
  priority: 0.8,                      // اولویت صفحات
  transform: async (config, url) => {
    // اضافه کردن صفحات محصولات پویا
    if (url.includes('/shop')) {
      return {
        loc: url, 
        changefreq: 'daily', 
        priority: 0.9,
        lastmod: new Date().toISOString()
      }
    }
    return {
      loc: url,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  }
};
