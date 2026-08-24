// @ts-check

import path from "node:path"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://portafolio-opal-beta-55.vercel.app/",

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": path.resolve("./src"),
			},
		},
	},

	integrations: [
		sitemap(),
		react(),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "dracula" },
			remarkRehype: { footnoteLabel: "Footnotes" },
			gfm: true,
			optimize: true,
		}),
	],
})
