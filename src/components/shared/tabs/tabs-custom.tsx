import { cn } from '@/lib/utils'

type Category = { id: string; label: string }

type CategoryProps = {
  categories: Category[]
  active: string
  onSelect: (id: string) => void
}

export function TabsCategories({ categories, active, onSelect }: CategoryProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
      {categories.map(({ id, label }) => {
        const isActive = active === id

        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            aria-pressed={isActive}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm border',
              'focus:outline-none focus:ring-2 focus:ring-primary/50',
              isActive
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'bg-card text-muted-foreground hover:bg-muted/50',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
