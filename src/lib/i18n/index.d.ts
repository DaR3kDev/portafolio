import { Locale } from '@/lib/i18n/i18n'

export interface LocaleProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}
