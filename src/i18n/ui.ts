import { ui, defaultLang, showDefaultLang } from '~/i18n/utils'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) return lang as keyof typeof ui

  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    if (!showDefaultLang && l === defaultLang) return normalizedPath

    if (normalizedPath.startsWith(`/${l}/`) || normalizedPath === `/${l}`) return normalizedPath

    return `/${l}${normalizedPath}`
  }
}
