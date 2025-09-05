import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github, Code } from 'lucide-react'
import Link from 'next/link'

type ProjectProps = {
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  github?: string
  slug?: string
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
  github,
  slug,
}: ProjectProps) {
  return (
    <Card className="group w-full max-w-sm overflow-hidden border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 rounded-2xl">
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
            <Code className="h-10 w-10 text-muted-foreground" />
          </div>
        )}

        {/* Overlay with small buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center gap-3">
          {link && (
            <Button
              size="sm"
              className="shadow bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {github && (
            <Button
              size="sm"
              variant="secondary"
              className="shadow bg-card text-muted-foreground hover:bg-muted"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Badge
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* "View Project" Button */}
        {slug && (
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href={`/projects/${slug}`}>{`View Project`}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
