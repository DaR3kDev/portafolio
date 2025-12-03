import { useStore } from "@nanostores/react"
import { useMemo, useState } from "react"
import Pagination from "~/components/pagination/Pagination"
import ProjectCard from "~/features/proyect/components/ProjectCard"
import TagButton from "~/features/proyect/components/TagButton"
import { createPaginationStore } from "~/stores/paginationStore"

export interface Project {
	title: string
	description: string
	techs: string[]
	tag: string
	img: string
	url: string
}

const projects: Project[] = [
	{
		title: "Proyecto 1",
		description: "Descripción 1",
		techs: ["Tech1", "Tech2"],
		tag: "Frontend",
		url: "https://github.com/usuario/proyecto1",
		img: "/imagen.jpg",
	},
	{
		title: "Proyecto 1",
		description: "Descripción 1",
		techs: ["Tech1", "Tech2"],
		tag: "Frontend",
		url: "https://github.com/usuario/proyecto1",
		img: "/imagen.jpg",
	},
	{
		title: "Proyecto 1",
		description: "Descripción 1",
		techs: ["Tech1", "Tech2"],
		tag: "Frontend",
		url: "https://github.com/usuario/proyecto1",
		img: "/imagen.jpg",
	},
]

const tags = ["Todos", "Frontend", "Backend", "Fullstack"]

export default function ProjectSections() {
	const itemsPerPage = 6
	const [currentTag, setCurrentTag] = useState("Todos")

	const filteredProjects = useMemo(() => {
		return currentTag === "Todos" ? projects : projects.filter((p) => p.tag === currentTag)
	}, [currentTag])

	const pagination = useMemo(() => {
		const store = createPaginationStore(itemsPerPage, filteredProjects.length)
		return store
	}, [filteredProjects.length])

	const $pagination = useStore(pagination.store)

	const pageProjects = filteredProjects.slice(
		($pagination.currentPage - 1) * itemsPerPage,
		$pagination.currentPage * itemsPerPage,
	)

	const handleTagClick = (tag: string) => {
		setCurrentTag(tag)
		pagination.setPage(1)
	}

	return (
		<section id="projects" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
			{/* Título */}
			<div className="max-w-3xl mx-auto text-center space-y-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
					Proyectos
				</h2>
				<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">Mis proyectos</p>
			</div>

			{/* Filtros */}
			<div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto my-6">
				{tags.map((tag) => (
					<TagButton key={tag} tag={tag} isActive={currentTag === tag} onClick={() => handleTagClick(tag)} />
				))}
			</div>

			{/* Proyectos */}
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
				{pageProjects.map((project) => (
					<ProjectCard key={project.title + project.tag} project={project} />
				))}
			</div>

			{/* Paginación */}
			<Pagination totalItems={filteredProjects.length} itemsPerPage={itemsPerPage} paginationStore={pagination} />
		</section>
	)
}
