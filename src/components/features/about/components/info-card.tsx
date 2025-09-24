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
    <div className="relative group w-full max-w-sm">
      {/* borde animado con tonos verdes y grises */}
      <div
        className="absolute inset-0 rounded-2xl p-[2px] 
                   bg-gradient-to-r from-green-500 via-emerald-400 to-gray-400 
                   bg-[length:200%_200%] animate-border opacity-70 
                   group-hover:opacity-100 transition duration-500
                   [mask-composite:exclude] [mask-image:linear-gradient(white,white)] 
                   [mask-repeat:no-repeat] [mask-size:cover]"
      />

      <Card
        className={`relative border rounded-2xl overflow-hidden shadow-sm 
                    hover:shadow-xl transition-all duration-300 hover:-translate-y-2 
                    bg-white dark:bg-neutral-950 ${colorClasses || ''}`}
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
    </div>
  )
}
