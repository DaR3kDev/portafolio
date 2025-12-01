import { Github, SquareArrowOutUpRight } from 'lucide-react'
import type { Project } from '~/features/home/components/ProjectSections'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group w-full max-w-sm overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2 rounded-2xl">
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <img src={project.img} alt={project.title} className="object-cover w-full h-full" />

        <div className="absolute inset-0 bg-black/50 dark:bg-white/20 opacity-100 backdrop-blur-sm flex items-center justify-center gap-3">
          <a
            href="#"
            className="px-2 py-1 bg-gray-900 text-white text-xs rounded shadow hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          >
            <Github />
          </a>
          <a
            href="#"
            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded shadow hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <SquareArrowOutUpRight />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map(tech => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  )
}
