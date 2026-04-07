export interface Project {
	title: string
	description: string
	techs: string[]
	tag: string
	img: string
	gitUrl: string
	url: string
}

export type ProjectTag = "Todos" | "Frontend" | "Backend" | "Fullstack"
