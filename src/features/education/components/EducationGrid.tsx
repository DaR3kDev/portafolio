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
		<div>
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{paginatedDiplomas.map((d) => (
					<article
						key={d.title}
						className="bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
					>
						{d.image && images[`/src/assets/education/${d.image}`] && (
							<button
								type="button"
								onClick={() => setActiveImage(images[`/src/assets/education/${d.image}`].default.src)}
								className="w-full"
							>
								<img
									src={images[`/src/assets/education/${d.image}`].default.src}
									alt={d.title}
									className="w-full h-48 object-cover"
								/>
							</button>
						)}

						<div className="p-5 space-y-2">
							<h3 className="font-semibold text-lg">{d.title}</h3>
							{d.institution && <p className="text-sm opacity-70">{d.institution}</p>}
							{d.description && <p className="text-sm opacity-70">{d.description}</p>}
							{d.date && <p className="text-xs opacity-50">{d.date}</p>}

							<div className="flex gap-4 pt-2">
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

			<Pagination totalItems={diplomas.length} itemsPerPage={itemsPerPage} paginationStore={pagination} />
			{activeImage && (
				<button
					type="button"
					onClick={() => setActiveImage(null)}
					className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 cursor-pointer"
				>
					<img src={activeImage} alt="Diploma Preview" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
				</button>
			)}
		</div>
	)
}
