import { defineCollection, z } from 'astro:content';

// Define the schema for tools
const toolsCollection = defineCollection({
  type: 'data', // for JSON files
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    difficulty: z.string(),
    estimatedTime: z.string(),
    tags: z.array(z.string()),
    content: z.string()
  })
});

export const collections = {
  'tools': toolsCollection,
}; 