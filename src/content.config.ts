// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const blog = defineCollection({
    // point the loader to the content folder where your posts actually live
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    // existing posts use ISO-like date strings, so accept string here
    schema: z.object({
        title: z.string().min(5).max(100),
        description: z.string().max(300),
        tags: z.array(z.string().max(100)),
        date: z.string(),
        timeToRead: z.number().min(1).max(60),
        thumbnail: z.string().optional(),
    }),
});

export const collections = { blog };
