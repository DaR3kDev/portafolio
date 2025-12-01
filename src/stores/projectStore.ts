import { atom } from 'nanostores'

export const currentTag = atom('Todos')
export const currentPage = atom(1)
export const projectsPerPage = atom(6)

export function setTag(tag: string) {
  currentTag.set(tag)
  currentPage.set(1)
}

export function setPage(page: number) {
  currentPage.set(page)
}

export function nextPage(totalPages: number, page: number) {
  currentPage.set(Math.min(page + 1, totalPages))
}

export function prevPage(page: number) {
  currentPage.set(Math.max(page - 1, 1))
}