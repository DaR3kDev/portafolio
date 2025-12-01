import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { currentPage, projectsPerPage, nextPage, prevPage, setPage } from '~/stores/projectStore'
import PaginationButton from '~/components/pagination/PaginationButton'

interface PaginationProps {
  totalItems: number
}

export default function Pagination({ totalItems }: PaginationProps) {
  const $currentPage = useStore(currentPage)
  const $itemsPerPage = useStore(projectsPerPage)

  const totalPages = Math.ceil(totalItems / $itemsPerPage)

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      <button
        onClick={() => prevPage($currentPage)}
        disabled={$currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronsLeft size={20} />
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1
        return (
          <PaginationButton
            key={page}
            page={page}
            isActive={$currentPage === page}
            onClick={() => setPage(page)}
          />
        )
      })}

      <button
        onClick={() => nextPage(totalPages, $currentPage)}
        disabled={$currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronsRight size={20} />
      </button>
    </div>
  )
}
