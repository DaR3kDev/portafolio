import { useStore } from "@nanostores/react"
import { useMemo, useState } from "react"
import { createPaginationStore } from "~/stores/paginationStore"
import { projects } from "./data"
import type { ProjectTag } from "./types"

export function useProjects(itemsPerPage: number) {
	const [currentTag, setCurrentTag] = useState<ProjectTag>("Todos")

	const filteredProjects = useMemo(() => {
		return currentTag === "Todos" ? projects : projects.filter((p) => p.tag === currentTag)
	}, [currentTag])

	const pagination = useMemo(() => {
		return createPaginationStore(itemsPerPage, filteredProjects.length)
	}, [filteredProjects.length, itemsPerPage])

	const $pagination = useStore(pagination.store)

	const pageProjects = filteredProjects.slice(
		($pagination.currentPage - 1) * itemsPerPage,
		$pagination.currentPage * itemsPerPage,
	)

	const handleTagClick = (tag: ProjectTag) => {
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
