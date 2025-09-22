import { Card, CardContent } from '@/components/ui/card'
import { JSX } from 'react'

type InfoCardProps = {
  title: string
  description: string
  icon: JSX.Element
  colorClasses?: string
}

export function InfoCard({ title, description, icon, colorClasses }: InfoCardProps) {
  return (
    <Card
      className={`group w-full max-w-sm border rounded-2xl overflow-hidden shadow-sm 
                  hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2
                  ${colorClasses || ''}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
