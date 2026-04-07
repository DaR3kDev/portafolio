import { ui } from "~/i18n/messages"
import { defaultLang, type Lang, showDefaultLang } from "./config"

// helpers
const isValidLang = (lang: string): lang is Lang => lang in ui

const isExternalPath = (path: string) =>
	path.startsWith("mailto:") || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("#")

const normalizePath = (path: string) => (path.startsWith("/") ? path : `/${path}`)

// lang desde URL
export const getLangFromUrl = (url: URL): Lang => {
	const [, lang] = url.pathname.split("/")
	return isValidLang(lang) ? lang : defaultLang
}

// traducciones
export const getTranslations = (lang: Lang) => (key: keyof (typeof ui)[typeof defaultLang]) =>
	ui[lang][key] ?? ui[defaultLang][key]

// paths
export const getTranslatedPath =
	(lang: Lang) =>
	(path: string, targetLang: Lang = lang) => {
		if (isExternalPath(path)) return path

		const normalizedPath = normalizePath(path)

		if (!showDefaultLang && targetLang === defaultLang) {
			return normalizedPath
		}

		if (normalizedPath.startsWith(`/${targetLang}/`) || normalizedPath === `/${targetLang}`) {
			return normalizedPath
		}

		return `/${targetLang}${normalizedPath}`
	}
