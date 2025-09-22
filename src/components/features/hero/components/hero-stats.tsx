import { NumberTicker } from '@/components/magicui/number-ticker'

interface HeroStatsProps {
  stats: {
    value: number
    decimals: number
    label: string
  }[]
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="w-full flex justify-center pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <NumberTicker
              value={stat.value}
              decimalPlaces={stat.decimals}
              className="text-5xl sm:text-6xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-heading"
            />
            <span className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 font-sans">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
