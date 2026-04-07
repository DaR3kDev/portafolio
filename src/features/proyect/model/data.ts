import type { Project, ProjectTag } from "./types"

export const projects: Project[] = [
	{
		title: "Rustlings Web",
		description: 'Web para aprender Rust aportando ejercicios acorde con el libro "The Rust Programming Language"',
		techs: ["Astro", "Tailwind CSS"],
		tag: "Frontend",
		gitUrl: "https://github.com/RustLangES/rustlings-web/tree/main",
		url: "https://rustlings.rustlang-es.org/",
		img: "/img/rustlings-web.webp",
	},
]

export const tags: ProjectTag[] = ["Todos", "Frontend", "Backend", "Fullstack"]
