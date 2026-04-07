import type { Lang } from "~/i18n/config"
import { nav } from "./nav"

export const ui: Record<Lang, Record<string, string>> = {
	en: {
		...nav.en,
	},
	es: {
		...nav.es,
	},
}
