'use client'

import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../layout/page-section'
import { Calendar, Code, MapPin } from 'lucide-react'
import { InfoCard } from '@/components/features/about/components/info-card'

export function AboutSection({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)

  return (
    <PageSection id="about" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* --- Título y subtítulo --- */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* --- Contenido principal --- */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* --- Texto y tarjetas --- */}
          <div className="space-y-10">
            <div className="space-y-6 text-gray-900 dark:text-white">
              <p className="text-lg leading-relaxed">{t.about.description1}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.about.description2}
              </p>
            </div>

            {/* --- Tarjetas de información --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard
                title="Ubicación"
                description={t.about.location}
                icon={<MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />}
              />
              <InfoCard
                title="Estado"
                description={t.about.availability}
                icon={<Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />}
                colorClasses="bg-green-50 dark:bg-green-900/20"
              />
            </div>
          </div>

          {/* --- Icono central --- */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-xl transition-all duration-300 bg-gradient-to-b from-muted/20 to-background dark:bg-gradient-to-b from-muted/20 to-background flex items-center justify-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-white/80 dark:bg-gradient-to-b from-muted/20 to-background backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
                <Code className="h-24 w-24 lg:h-32 lg:w-32 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
