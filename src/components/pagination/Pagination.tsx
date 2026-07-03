import { useStore } from "@nanostores/react"
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react"
import PaginationButton from "~/components/pagination/PaginationButton"
import type { createPaginationStore } from "~/stores/paginationStore"

interface PaginationProps {
	totalItems: number
	itemsPerPage: number
	paginationStore: ReturnType<typeof createPaginationStore>
}

export default function Pagination({ totalItems, itemsPerPage, paginationStore }: PaginationProps) {
	const $pagination = useStore(paginationStore.store)
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	if (totalPages <= 1) return null

	return (
		<div className="flex justify-center items-center gap-3 mt-8">
			<button
				type="button"
				onClick={paginationStore.prevPage}
				disabled={$pagination.currentPage === 1}
				className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
			>
				<IconChevronsLeft size={20} />
			</button>

			{[...Array(totalPages)].map((_, i) => {
				const page = i + 1
				return (
					<PaginationButton
						key={page}
						page={page}
						isActive={$pagination.currentPage === page}
						onClick={() => paginationStore.setPage(page)}
					/>
				)
			})}

			<button
				type="button"
				onClick={paginationStore.nextPage}
				disabled={$pagination.currentPage === totalPages}
				className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
			>
				<IconChevronsRight size={20} />
			</button>
		</div>
	)
}
