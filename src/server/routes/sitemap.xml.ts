import { serverQueryContent } from '#content/server';
import { SitemapStream, streamToPromise } from 'sitemap';

export default defineEventHandler(async (event: any) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: 'https://vvll.net',
    // xslUrl: '/sitemap.xsl',
  });

  for (const doc of docs) {
    sitemap.write({
      title: doc.title,
      url: doc._path,
      changefreq: 'monthly',
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
