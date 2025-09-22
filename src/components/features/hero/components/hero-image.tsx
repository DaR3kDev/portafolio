import { getTranslations } from '@/lib/i18n/i18n'
import Image from 'next/image'

export function HeroImage({ t }: { t: ReturnType<typeof getTranslations> }) {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary/40">
        <Image src="/img/me.jpg" alt="Profile photo" fill className="object-cover" priority />
      </div>

      <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary shadow-sm">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {t.about.availability}
        </span>
      </div>
    </div>
  )
}
