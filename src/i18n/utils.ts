export const languages = {
  es: { code: 'es', name: 'Español' },
  en: { code: 'en', name: 'English' },
} as const

export const defaultLang = 'es'
export const showDefaultLang = false

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.about': 'About',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
  },
} as const
