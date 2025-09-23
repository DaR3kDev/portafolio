import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { SocialButtons } from '../buttons/social-button'
import Image from 'next/image'
import { socialLinks } from '@/constants/social-links'

export function Footer({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)

  return (
    <footer className="relative bg-gradient-to-b from-muted/20 to-background py-16 lg:py-24 overflow-hidden">
      {/* Fondo decorativo radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="container mx-auto max-w-6xl flex flex-col gap-10">
        {/* Logo y redes sociales */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 transition hover:opacity-90">
            <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center shadow-lg">
              <Image
                src="/img/logo.jpg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Portfolio</span>
          </div>

          {/* Redes sociales */}
          <SocialButtons
            links={socialLinks}
            spacing="space-x-4"
            className="transition-colors hover:text-primary"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Portfolio. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
