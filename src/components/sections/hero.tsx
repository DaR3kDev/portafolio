import Image from 'next/image'
import { scrollToSection } from '@/lib/utils/scroll'
import { Button } from '../ui/button'
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '../shared/layout/page-section'
import { SocialButtons, SocialLink } from '../shared/buttons/social-button'
import { WhatsAppIcon } from '../icons/brand-whatsapp'

export function Hero({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)

  const socialLinks: SocialLink[] = [
    {
      icon: <Mail className="w-full h-full" />,
      href: 'mailto:example@mail.com',
      label: 'Email',
    },
    {
      icon: <Linkedin className="w-full h-full" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-full h-full" />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <WhatsAppIcon className="w-full h-full" />,
      href: 'https://wa.me/573001234567',
      label: 'WhatsApp',
    },
  ]

  return (
    <PageSection
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Imagen */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary/40">
              <Image
                src="/images/profile.png"
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

          {/* Texto + Botones */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              {t.hero.greeting} <span className="block text-primary">{t.hero.role}</span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            {/* Botón principal + redes */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
              {/* Botón Descargar CV */}
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <Download className="mr-2 h-5 w-5" />
                {t.hero.downloadCV}
              </Button>

              {/* Redes Sociales */}
              <div className="flex items-center justify-center gap-6">
                <SocialButtons links={socialLinks.slice(0, 2)} spacing="space-x-3" />

                <span className="text-muted-foreground opacity-50">|</span>

                <SocialButtons links={socialLinks.slice(2)} spacing="space-x-6" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 text-center md:text-left">
              <div>
                <p className="text-4xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Repositorios</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">21</p>
                <p className="text-sm text-muted-foreground">Estrellas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">9</p>
                <p className="text-sm text-muted-foreground">Seguidores</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">844</p>
                <p className="text-sm text-muted-foreground">Commits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer rounded-full p-3 bg-background/60 shadow-md hover:bg-background transition"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
    </PageSection>
  )
}
