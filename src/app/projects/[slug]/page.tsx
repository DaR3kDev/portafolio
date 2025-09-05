// src/app/projects/[slug]/page.tsx
import { getTranslations } from '@/lib/i18n/i18n'
import { PageSection } from '@/components/shared/layout/page-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectDetailPage({
  params,
}: {
  params:
    | { slug: string; currentLocale: 'es' | 'en' }
    | Promise<{ slug: string; currentLocale: 'es' | 'en' }>
}) {
  const { slug, currentLocale } = await params
  const t = getTranslations(currentLocale)
  const project = t.projects.items.find(p => p.slug === slug)

  if (!project) {
    return (
      <PageSection id="project-detail" className="py-20 lg:py-32 bg-background relative">
        <Link
          href="/"
          className="absolute top-6 left-6 text-primary hover:underline font-medium flex items-center gap-1 z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          {currentLocale === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
        </Link>
        <div className="text-center mt-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {currentLocale === 'es' ? 'Proyecto no encontrado' : 'Project Not Found'}
          </h2>
          <p className="text-muted-foreground mt-2 text-base sm:text-lg">
            {currentLocale === 'es'
              ? 'El proyecto que buscas no existe.'
              : 'The project you are looking for does not exist.'}
          </p>
        </div>
      </PageSection>
    )
  }

  return (
    <PageSection
      id="project-detail"
      className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background relative"
    >
      {/* Botón volver */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-primary hover:underline font-medium flex items-center gap-2 z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        {currentLocale === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
      </Link>

      <div className="container mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Imagen del proyecto */}
        {project.image && (
          <Card className="overflow-hidden shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={project.image.startsWith('/') ? project.image : `/${project.image}`}
              alt={project.title}
              className="object-cover w-full h-64 sm:h-80 md:h-96 transition-transform duration-500 hover:scale-105"
            />
          </Card>
        )}

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              className="text-xs sm:text-sm md:text-base px-3 py-1 rounded-full 
                 bg-gradient-to-r from-primary/20 to-primary/10 
                 text-primary font-medium 
                 shadow-sm hover:shadow-md hover:scale-105 
                 transition-all duration-300 ease-in-out"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Información Detallada */}
        {project.detailedInfo && (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-8">
            {project.detailedInfo.problems && (
              <Card className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">
                    {currentLocale === 'es' ? 'Problemas' : 'Problems'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.detailedInfo.problems}
                  </p>
                </CardContent>
              </Card>
            )}

            {project.detailedInfo.solutions && (
              <Card className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">
                    {currentLocale === 'es' ? 'Soluciones' : 'Solutions'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.detailedInfo.solutions}
                  </p>
                </CardContent>
              </Card>
            )}

            {project.detailedInfo.learnings && (
              <Card className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">
                    {currentLocale === 'es' ? 'Aprendizajes' : 'Learnings'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.detailedInfo.learnings}
                  </p>
                </CardContent>
              </Card>
            )}

            {project.detailedInfo.additionalNotes && (
              <Card className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">
                    {currentLocale === 'es' ? 'Notas Adicionales' : 'Additional Notes'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.detailedInfo.additionalNotes}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {project.link && (
            <Button
              className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground hover:scale-105 transition-transform duration-300 shadow-md"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="inline mr-2 h-4 w-4" />
                {currentLocale === 'es' ? 'Ver Proyecto' : 'View Project'}
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              className="bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105 transition-transform duration-300 shadow-md"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="inline mr-2 h-4 w-4" />
                {currentLocale === 'es' ? 'Ver Código' : 'View Code'}
              </a>
            </Button>
          )}
        </div>
      </div>
    </PageSection>
  )
}
