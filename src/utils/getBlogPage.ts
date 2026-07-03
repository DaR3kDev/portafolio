import type { CollectionEntry } from "astro:content"
import { getCollection } from "astro:content"
import type { collections } from "~/content.config"
import { getLangFromUrl } from "~/i18n/utils"

type CollectionName = keyof typeof collections

/**
 * Devuelve la data de cualquier colección según el idioma detectado
 */
export async function getPageData<C extends CollectionName>(
	url: URL,
	collection: C,
): Promise<CollectionEntry<C>["data"]> {
	const lang = getLangFromUrl(url)
	const pages = await getCollection(collection)

	const page = pages.find((page) => {
		const pageLang = page.id.split("/")[0]
		return pageLang === lang
	})

	if (!page) throw new Error(`No existe contenido para la colección "${collection}" para el idioma "${lang}".`)

	return page.data
}
