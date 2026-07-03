export type ProjectTag = "Todos" | "Frontend" | "Backend" | "Fullstack"

export interface Project {
	title: string
	description: string
	techs: string[]
	tag: Exclude<ProjectTag, "Todos">
	img: string
	gitUrl?: string
	url?: string
	featured?: boolean
}
