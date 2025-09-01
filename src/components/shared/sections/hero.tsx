import Image from 'next/image'
import { scrollToSection } from '@/lib/utils/scroll'
import { Button } from '../../ui/button'
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../layout/page-section'
import { SocialButtons, SocialLink } from '../buttons/social-button'
import { WhatsAppIcon } from '../icons/brand-whatsapp'
import { NumberTicker } from '../../magicui/number-ticker'
import { BackgroundGrid } from '../backgraound/grid-effect'

export function Hero({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)

  const socialLinks: SocialLink[] = [
    { icon: <Mail className="w-full h-full" />, href: 'mailto:example@mail.com', label: 'Email' },
    {
      icon: <Linkedin className="w-full h-full" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    { icon: <Github className="w-full h-full" />, href: 'https://github.com', label: 'GitHub' },
    {
      icon: <WhatsAppIcon className="w-full h-full" />,
      href: 'https://wa.me/573001234567',
      label: 'WhatsApp',
    },
  ]

  const stats = [
    { value: 567, decimals: 0, label: 'Repositorios' },
    { value: 567, decimals: 0, label: 'Estrellas' },
    { value: 9, decimals: 0, label: 'Seguidores' },
    { value: 844, decimals: 0, label: 'Commits' },
  ]

  return (
    <PageSection
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      {/* 1️⃣ Cuadrícula de fondo */}
      <BackgroundGrid />

      {/* Contenedor principal */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-24">
        {/* Texto, botones y redes */}
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

        {/* Imagen y disponibilidad */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary/40">
            <Image
              src="../public/next.svg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary shadow-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t.about.availability}
            </span>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="w-full flex justify-center pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimals}
                className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-extrabold text-gray-900 dark:text-white font-heading"
              />
              <span className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('projects')}
        className="absolute left-1/2 -translate-x-1/2 cursor-pointer rounded-full p-3 bg-background/60 shadow-md hover:bg-background transition animate-bounce bottom-16 sm:bottom-12 md:bottom-12"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
    </PageSection>
  )
}
