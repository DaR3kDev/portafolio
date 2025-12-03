// src/stores/paginationStore.ts
import { atom } from "nanostores"

export interface PaginationStore {
	currentPage: number
	itemsPerPage: number
	totalItems: number
}

export function createPaginationStore(itemsPerPage: number = 6, totalItems: number = 0) {
	const store = atom<PaginationStore>({
		currentPage: 1,
		itemsPerPage,
		totalItems,
	})

	return {
		store,
		setPage: (page: number) => store.set({ ...store.get(), currentPage: page }),
		nextPage: () => {
			const state = store.get()
			const totalPages = Math.ceil(state.totalItems / state.itemsPerPage)
			store.set({ ...state, currentPage: Math.min(state.currentPage + 1, totalPages) })
		},
		prevPage: () => {
			const state = store.get()
			store.set({ ...state, currentPage: Math.max(state.currentPage - 1, 1) })
		},
		setTotalItems: (total: number) => {
			const state = store.get()
			store.set({ ...state, totalItems: total })
		},
	}
}
