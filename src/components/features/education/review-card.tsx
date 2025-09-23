'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ReviewCardProps {
  img?: string
  title?: string
}

export function ReviewCard({ img, title }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        'relative w-64 h-44 sm:w-72 sm:h-48 cursor-pointer overflow-hidden rounded-2xl border',
        'border-gray-200 bg-white shadow-md transition-all duration-300',
        'hover:shadow-lg hover:-translate-y-1',
        'dark:border-gray-700 dark:bg-neutral-900/90 backdrop-blur-sm',
      )}
    >
      {/* Imagen del diploma */}
      {img ? (
        <Image
          src={img}
          alt={title || 'Diploma'}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain p-4 transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400 text-sm">
          Imagen no disponible
        </div>
      )}

      {/* Caption con degradado */}
      {title && (
        <figcaption
          className={cn(
            'absolute bottom-0 left-0 right-0 text-center',
            'bg-gradient-to-t from-black/70 to-transparent',
            'text-white text-xs sm:text-sm font-medium px-3 py-2 truncate',
          )}
        >
          {title}
        </figcaption>
      )}
    </figure>
  )
}
