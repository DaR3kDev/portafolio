'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ReviewCardProps {
  img: string
}

export function ReviewCard({ img }: ReviewCardProps) {
  const card = (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} src={img} alt={''} />
      </div>
    </figure>
  )

  return card
}
