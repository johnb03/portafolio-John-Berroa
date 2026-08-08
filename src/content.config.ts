import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date().transform((date) =>
			date.getUTCHours() === 0 && date.getUTCMinutes() === 0 && date.getUTCSeconds() === 0
				? new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
				: date,
		),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
