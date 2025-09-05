import { LocaleProps } from '@/lib/i18n'
import { Category } from './type/category-type'

export const getProjectCategories = (locale: LocaleProps['currentLocale']): Category[] => [
  { id: 'all', label: locale === 'es' ? 'Todos' : 'All' },
  { id: 'web', label: locale === 'es' ? 'Desarrollo Web' : 'Web Development' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: locale === 'es' ? 'Móvil' : 'Mobile' },
]
