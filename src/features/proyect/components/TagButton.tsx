interface Props {
  tag: string
  isActive: boolean
  onClick: (tag: string) => void
}

export default function TagButton({ tag, isActive, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
        isActive
          ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
          : 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black'
      }`}
    >
      {tag}
    </button>
  )
}
