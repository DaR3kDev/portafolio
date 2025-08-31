import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

export function ProjectPagination({ currentPage, totalPages, onChange }: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onChange(page)
    }
  }

  return (
    <div className="flex justify-center pt-8">
      <Pagination>
        <PaginationContent className="gap-2">
          {/* Botón Anterior */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-label="Página anterior"
              onClick={e => {
                e.preventDefault()
                handlePageChange(currentPage - 1)
              }}
              className={`rounded-full ${
                currentPage === 1 ? 'pointer-events-none opacity-50' : ''
              }`}
            />
          </PaginationItem>

          {/* Páginas */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={e => {
                  e.preventDefault()
                  handlePageChange(page)
                }}
                isActive={currentPage === page}
                className="rounded-full"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Botón Siguiente */}
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-label="Página siguiente"
              onClick={e => {
                e.preventDefault()
                handlePageChange(currentPage + 1)
              }}
              className={`rounded-full ${
                currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
