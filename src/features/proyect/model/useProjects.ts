import { useStore } from "@nanostores/react"
import { useMemo, useState } from "react"
import { createPaginationStore } from "~/stores/paginationStore"
import type { Project, ProjectTag } from "./types"

export function useProjects(projects: Project[], itemsPerPage: number) {
	const [currentTag, setCurrentTag] = useState<ProjectTag>("Todos")

	const filteredProjects = useMemo(() => {
		if (currentTag === "Todos") {
			return projects
		}

		return projects.filter((project) => project.tag === currentTag)
	}, [projects, currentTag])

	const pagination = useMemo(
		() => createPaginationStore(itemsPerPage, filteredProjects.length),
		[itemsPerPage, filteredProjects.length],
	)

	const { currentPage } = useStore(pagination.store)

	const start = (currentPage - 1) * itemsPerPage
	const end = start + itemsPerPage

	const pageProjects = filteredProjects.slice(start, end)

	function handleTagClick(tag: ProjectTag) {
		setCurrentTag(tag)
		pagination.setPage(1)
	}

	return {
		currentTag,
		filteredProjects,
		pageProjects,
		pagination,
		handleTagClick,
	}
}
