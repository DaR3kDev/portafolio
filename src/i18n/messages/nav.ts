import type { TranslationKey } from "~/i18n/types"

type Messages = Record<TranslationKey, string>

export const nav: Record<"es" | "en", Messages> = {
	en: {
		"nav.home": "Home",
		"nav.experience": "Experience",
		"nav.projects": "Projects",
		"nav.education": "Education",
		"nav.about": "About",
		"nav.contact": "Contact",
	},
	es: {
		"nav.home": "Inicio",
		"nav.experience": "Experiencia",
		"nav.projects": "Proyectos",
		"nav.education": "Educación",
		"nav.about": "Sobre mí",
		"nav.contact": "Contacto",
	},
}
