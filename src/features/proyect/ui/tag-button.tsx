import type { ProjectTag } from "~/features/proyect/model/types"

interface TagButtonProps {
	tag: ProjectTag
	isActive: boolean
	onClick: (tag: ProjectTag) => void
}

export default function TagButton({ tag, isActive, onClick }: TagButtonProps) {
	return (
		<button
			onClick={() => onClick(tag)}
			type="button"
			aria-pressed={isActive}
			className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 ${
				isActive
					? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
					: "border-gray-300 dark:border-gray-700 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
			}`}
		>
			{tag}
		</button>
	)
}
