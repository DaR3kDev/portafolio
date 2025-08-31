import { LocaleProps } from '@/lib/i18n'
import { Project } from './type/proyects-type'
import { Category } from './type/category-type'

export const getProjects = (t: any): Project[] => [
  {
    title: t.projects.items[0].title,
    description: t.projects.items[0].description,
    image: '/modern-ecommerce-interface.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    category: 'web',
  },
  {
    title: t.projects.items[1].title,
    description: t.projects.items[1].description,
    image: '/task-management-dashboard.png',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    link: '#',
    github: '#',
    category: 'web',
  },
  {
    title: t.projects.items[2].title,
    description: t.projects.items[2].description,
    image: '/preview/project4.png',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    link: '#',
    github: '#',
    category: 'frontend',
  },
  {
    title: 'Otro proyecto',
    description: 'Ejemplo de otro proyecto',
    image: '/preview/project4.png',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    link: '#',
    github: '#',
    category: 'frontend',
  },
  {
    title: 'Backend API',
    description: 'Ejemplo backend',
    image: '',
    technologies: ['NestJS', 'Prisma', 'PostgreSQL'],
    link: '#',
    github: '#',
    category: 'backend',
  },
]

export const getProjectCategories = (locale: LocaleProps['currentLocale']): Category[] => [
  { id: 'all', label: locale === 'es' ? 'Todos' : 'All' },
  { id: 'web', label: locale === 'es' ? 'Desarrollo Web' : 'Web Development' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: locale === 'es' ? 'Móvil' : 'Mobile' },
]
