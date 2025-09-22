import { SocialButtons, SocialLink } from '@/components/shared/buttons/social-button'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function HeroText({ t, socialLinks }: { t: any; socialLinks: SocialLink[] }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        {t.hero.greeting + ' KEVIN'} <span className="block text-primary">{t.hero.role}</span>
      </h1>

      <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
        {t.hero.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
        <Button
          size="lg"
          className="flex items-center justify-center text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-auto"
        >
          <Download className="mr-2 h-5 w-5" />
          {t.hero.downloadCV}
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <SocialButtons links={socialLinks.slice(0, 2)} spacing="space-x-3" />
          <span className="text-muted-foreground opacity-50 hidden sm:inline">|</span>
          <SocialButtons links={socialLinks.slice(2)} spacing="space-x-3 sm:space-x-6" />
        </div>
      </div>
    </div>
  )
}
