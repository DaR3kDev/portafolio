import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { Code, Github, Linkedin, Mail } from 'lucide-react'
import { SocialButtons, SocialLink } from '../buttons/social-button'
import { WhatsAppIcon } from '../icons/brand-whatsapp'

export function Footer({ currentLocale }: LocaleProps) {
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

  return (
    <footer className="relative py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      {/* Fondo radial decorativo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]" />

      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        {/* Logo + Redes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 hover:opacity-90 transition">
            <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center shadow-md">
              <Code className="h-5 w-5 text-white dark:text-gray-900" />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">Portfolio</span>
          </div>

          {/* Redes sociales */}
          <SocialButtons
            links={socialLinks}
            spacing="space-x-4"
            className="hover:text-primary transition-colors"
          />
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Portfolio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
