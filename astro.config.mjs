// @ts-check

import path from "node:path"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": path.resolve("./src"),
			},
		},
	},

	integrations: [
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
