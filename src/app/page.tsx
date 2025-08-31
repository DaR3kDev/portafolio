'use client'

import { useState } from 'react'
import { Navigation } from '@/components/shared/navigation/navbar'
import { defaultLocale, Locale } from '@/lib/i18n/i18n'
import { Hero } from '@/components/shared/sections/hero'
import { Projects } from '@/components/shared/sections/projects'
import { Experience } from '@/components/shared/sections/experience'

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />
      <Hero currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />
      <Experience currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />
      <Projects currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />
    </div>
  )
}
