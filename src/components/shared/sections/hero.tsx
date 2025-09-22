import { Mail, Github, Linkedin } from 'lucide-react'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../layout/page-section'
import { SocialLink } from '../buttons/social-button'
import { WhatsAppIcon } from '../icons/brand-whatsapp'
import { BackgroundGrid } from '../backgraound/grid-effect'
import { HeroText } from '@/components/features/hero/components/hero-text'
import { HeroImage } from '@/components/features/hero/components/hero-image'
import { HeroStats } from '@/components/features/hero/components/hero-stats'
import { ScrollDownButton } from '@/components/features/hero/components/scroll-down-button'

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
    { value: 567, decimals: 0, label: 'Repostories' },
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
        <HeroText t={t} socialLinks={socialLinks} />

        {/* Imagen y disponibilidad */}
        <HeroImage t={t} />
      </div>

      {/* Estadísticas */}
      <HeroStats stats={stats} />

      <ScrollDownButton />
    </PageSection>
  )
}
