import { en } from './translations/en'
import { es } from './translations/es'

export const defaultLocale = 'es'
export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]

export const translations = {
  es,
  en,
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
