export const languages = {
	es: { code: "es", name: "Español" },
	en: { code: "en", name: "English" },
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "es"
export const showDefaultLang = false
