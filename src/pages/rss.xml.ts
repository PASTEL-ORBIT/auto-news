import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const news = (await getCollection('news'))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, 30);

  return rss({
    title: 'Auto News',
    description: 'テック・AI・インディーゲームの最新ニュースを毎日お届け',
    site: context.site!,
    items: news.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `${import.meta.env.BASE_URL}news/${article.id}/`,
    })),
  });
}
