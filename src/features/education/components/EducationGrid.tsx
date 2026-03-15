import { useStore } from "@nanostores/react"
import { useMemo, useState } from "react"
import Pagination from "~/components/pagination/Pagination"
import { createPaginationStore } from "~/stores/paginationStore"

interface Diploma {
	title: string
	institution?: string
	description?: string
	date?: string
	image?: string
	file?: string
}

interface DiplomaGridProps {
	diplomas: Diploma[]
	images: Record<string, { default: { src: string } }>
}

export default function DiplomaGrid({ diplomas, images }: DiplomaGridProps) {
	const itemsPerPage = 6

	const pagination = useMemo(() => createPaginationStore(itemsPerPage, diplomas.length), [diplomas.length])

	const $pagination = useStore(pagination.store)

	const [activeImage, setActiveImage] = useState<string | null>(null)

	const paginatedDiplomas = diplomas.slice(
		($pagination.currentPage - 1) * $pagination.itemsPerPage,
		$pagination.currentPage * $pagination.itemsPerPage,
	)

	return (
		<div className="space-y-12">
			{/* GRID */}
			<div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
				{paginatedDiplomas.map((d) => (
					<article
						key={d.title}
						className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
					>
						{/* IMAGE */}
						{d.image && images[`/src/assets/education/${d.image}`] && (
							<button
								type="button"
								onClick={() => setActiveImage(images[`/src/assets/education/${d.image}`].default.src)}
								className="w-full group"
							>
								<img
									src={images[`/src/assets/education/${d.image}`].default.src}
									alt={d.title}
									className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
								/>
							</button>
						)}

						{/* CONTENT */}
						<div className="p-5 space-y-3">
							<h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">{d.title}</h3>

							{d.institution && <p className="text-sm text-gray-600 dark:text-gray-400">{d.institution}</p>}

							{d.description && <p className="text-sm text-gray-600 dark:text-gray-400">{d.description}</p>}

							{d.date && <p className="text-xs text-gray-500 dark:text-gray-500">{d.date}</p>}

							{/* ACTIONS */}
							<div className="flex flex-wrap gap-4 pt-2">
								{d.file && (
									<a
										href={d.file}
										download
										target="_blank"
										className="text-sm font-medium text-blue-500 hover:underline"
									>
										View PDF
									</a>
								)}

								{d.image && (
									<button
										type="button"
										onClick={() => setActiveImage(images[`/src/assets/education/${d.image}`].default.src)}
										className="text-sm font-medium text-zinc-500 hover:underline"
									>
										View Certification
									</button>
								)}
							</div>
						</div>
					</article>
				))}
			</div>

			{/* PAGINATION */}
			<div className="flex justify-center">
				<Pagination totalItems={diplomas.length} itemsPerPage={itemsPerPage} paginationStore={pagination} />
			</div>

			{/* MODAL IMAGE */}
			{activeImage && (
				<button
					type="button"
					onClick={() => setActiveImage(null)}
					className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4 cursor-pointer"
				>
					<img
						src={activeImage}
						alt="Diploma Preview"
						className="max-h-[90vh] max-w-[95vw] sm:max-w-[80vw] rounded-xl shadow-2xl"
					/>
				</button>
			)}
		</div>
	)
}
