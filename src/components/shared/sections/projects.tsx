'use client'

import { useState } from 'react'
import { LocaleProps } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n/i18n'
import { ProjectPagination } from '../pagination/pagination'
import { TabsCategories } from '../tabs/tabs-custom'
import { PageSection } from '../layout/page-section'
import { ProjectCard } from '@/components/features/proyects/project-card'
import { getProjectCategories, getProjects } from '@/components/features/proyects/projects.data'

export function Projects({ currentLocale }: LocaleProps) {
  const t = getTranslations(currentLocale)
  const [activeProjectTab, setActiveProjectTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const projects = getProjects(t)
  const categories = getProjectCategories(currentLocale)

  const projectsPerPage = 3

  const filteredProjects =
    activeProjectTab === 'all' ? projects : projects.filter(p => p.category === activeProjectTab)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <PageSection
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.projects.subtitle}</p>
        </div>

        {/* Categorías */}
        <TabsCategories
          categories={categories}
          active={activeProjectTab}
          onSelect={id => {
            setActiveProjectTab(id)
            setCurrentPage(1)
          }}
        />

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {currentProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        {/* Mensaje sin proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {currentLocale === 'es'
                ? 'No hay proyectos en esta categoría aún.'
                : 'No projects in this category yet.'}
            </p>
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <ProjectPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={setCurrentPage}
          />
        )}
      </div>
    </PageSection>
  )
}
