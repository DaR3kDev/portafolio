import Pagination from "~/components/pagination/Pagination"
import ProjectCard from "~/features/proyect/components/ProjectCard"
import TagButton from "~/features/proyect/components/TagButton"
import { tags } from "~/features/proyect/model/data"
import { useProjects } from "~/features/proyect/model/useProjects"

export default function ProjectSections() {
	const itemsPerPage = 6

	const { currentTag, filteredProjects, pageProjects, pagination, handleTagClick } = useProjects(itemsPerPage)

	return (
		<section id="projects" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
			{/* Título */}
			<div className="max-w-3xl mx-auto text-center space-y-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
					Proyectos
				</h2>

				<p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">Mis proyectos</p>
			</div>

			{/* Filtros */}
			<div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mt-10 mb-12">
				{tags.map((tag) => (
					<TagButton key={tag} tag={tag} isActive={currentTag === tag} onClick={handleTagClick} />
				))}
			</div>

			{/* Grid de proyectos */}
			<div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
				{pageProjects.map((project) => (
					<ProjectCard key={project.title + project.tag} project={project} />
				))}
			</div>

			{/* Paginación */}
			<div className="mt-12 flex justify-center">
				<Pagination totalItems={filteredProjects.length} itemsPerPage={itemsPerPage} paginationStore={pagination} />
			</div>
		</section>
	)
}
