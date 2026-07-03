import Pagination from "~/components/pagination/Pagination"
import ProjectCard from "~/features/proyect/components/ProjectCard"
import TagButton from "~/features/proyect/components/TagButton"
import type { Project, ProjectTag } from "~/features/proyect/model/types"
import { useProjects } from "~/features/proyect/model/useProjects"

const ITEMS_PER_PAGE = 6

interface ProjectSectionProps {
	title: string
	subtitle: string
	viewProject: string
	projects: Project[]
}

export default function ProjectSection({ title, subtitle, viewProject, projects }: ProjectSectionProps) {
	const projectTags = new Set(projects.map((project) => project.tag))

	const tags: ProjectTag[] = ["Todos", ...projectTags]

	const { currentTag, filteredProjects, pageProjects, pagination, handleTagClick } = useProjects(
		projects,
		ITEMS_PER_PAGE,
	)

	return (
		<section id="projects" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-3xl space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
					{title}
				</h2>

				<p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">{subtitle}</p>
			</div>

			<div className="mx-auto mt-10 mb-12 flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4">
				{tags.map((tag) => (
					<TagButton key={tag} tag={tag} isActive={currentTag === tag} onClick={handleTagClick} />
				))}
			</div>

			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				{pageProjects.map((project) => (
					<ProjectCard key={`${project.title}-${project.tag}`} project={project} viewProject={viewProject} />
				))}
			</div>

			<div className="mt-12 flex justify-center">
				<Pagination totalItems={filteredProjects.length} itemsPerPage={ITEMS_PER_PAGE} paginationStore={pagination} />
			</div>
		</section>
	)
}
