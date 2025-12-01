import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    greeting: z.string(),
    job: z.string(),
    about: z.string(),
    cvButton: z.string(),
    availability: z.string(),
  }),
})

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    experience: z.array(
      z.object({
        title: z.string(),
        company: z.string(),
        date: z.string(),
        description: z.string(),
      }),
    ),
  }),
})

const aboutme = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description1: z.string(),
    description2: z.string(),
    location: z.string(),
    locationLabel: z.string(),
  }),
})

const footer = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    name: z.string(),
    year: z.number(),
    rights: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
        icon: z.string(),
      }),
    ),
  }),
})

export const collections = { blog, experience, aboutme, footer }
