interface Props {
	page: number
	isActive: boolean
	onClick: (page: number) => void
}

export default function PaginationButton({ page, isActive, onClick }: Props) {
	return (
		<button
			type="button"
			onClick={() => onClick(page)}
			className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
				isActive
					? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg"
					: "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
			}`}
		>
			{page}
		</button>
	)
}
