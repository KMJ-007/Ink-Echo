import { defineCollection, z } from 'astro:content';

const poemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'poems': poemsCollection,
};