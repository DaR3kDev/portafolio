import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const createLoader = (path: string) => glob({ pattern: "**/*.{md,mdx}", base: path })

const linkSchema = z.object({
	name: z.string(),
	href: z.string(),
	icon: z.string(),
})

const experienceItemSchema = z.object({
	title: z.string(),
	company: z.string(),
	date: z.string(),
	description: z.string(),
})

const diplomaSchema = z.object({
	title: z.string(),
	institution: z.string(),
	type: z.string(),
	description: z.string(),
	date: z.string(),
	skills: z.array(z.string()),
	image: z.string().optional(),
	file: z.string().optional(),
})

const blog = defineCollection({
	loader: createLoader("./src/content/blog"),
	schema: z.object({
		greeting: z.string(),
		job: z.string(),
		about: z.string(),
		cvButton: z.string(),
		availability: z.string(),
	}),
})

const projects = defineCollection({
	loader: createLoader("./src/content/projects"),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		viewProject: z.string(),
		projects: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
				techs: z.array(z.string()),
				tag: z.enum(["Frontend", "Backend", "Fullstack"]),
				gitUrl: z.string().optional(),
				url: z.string().optional(),
				img: z.string(),
				featured: z.boolean().default(false),
			}),
		),
	}),
})

const experience = defineCollection({
	loader: createLoader("./src/content/experience"),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		experience: z.array(experienceItemSchema),
	}),
})

const aboutme = defineCollection({
	loader: createLoader("./src/content/aboutme"),
	schema: z.object({
		title: z.string(),
		description1: z.string(),
		description2: z.string(),
		location: z.string(),
		locationLabel: z.string(),
	}),
})

const footer = defineCollection({
	loader: createLoader("./src/content/footer"),
	schema: z.object({
		name: z.string(),
		year: z.number(),
		rights: z.string(),
		links: z.array(linkSchema),
	}),
})

const education = defineCollection({
	loader: createLoader("./src/content/education"),
	schema: z.object({
		title: z.string(),
		view: z.string(),
		certification: z.string(),
		diplomas: z.array(diplomaSchema),
	}),
})

const page404 = defineCollection({
	loader: createLoader("./src/content/404"),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
})

export const collections = {
	blog,
	projects,
	experience,
	education,
	aboutme,
	footer,
	page404,
}
