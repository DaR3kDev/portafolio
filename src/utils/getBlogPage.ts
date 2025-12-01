import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import type { collections } from '~/content.config'
import { getLangFromUrl } from '~/i18n/ui'

type CollectionName = keyof typeof collections

/**
 * Devuelve la data de cualquier colección según el idioma detectado
 */
export async function getPageData<C extends CollectionName>(
  url: URL,
  collection: C,
): Promise<CollectionEntry<C>['data']> {
  // Detectar idioma
  const lang = getLangFromUrl(url)

  // Obtener colección completa
  const pages = await getCollection(collection)

  // Buscar página del idioma
  const page = pages.find(p => p.id.startsWith(`${lang}/`))
  console.log(page)
  if (!page)
    throw new Error(`No existe contenido para la colección "${collection}" y el idioma: ${lang}`)

  // Retornar solo data
  return page.data
}
