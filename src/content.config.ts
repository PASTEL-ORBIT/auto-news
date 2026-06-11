import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['tech', 'ai', 'indie-game', 'general']),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { news };
