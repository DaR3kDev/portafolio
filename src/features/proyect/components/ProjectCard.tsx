import { Github, SquareArrowOutUpRight } from "lucide-react"
import type { Project } from "~/features/proyect/model/types"

interface ProjectCardProps {
	project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="group w-full max-w-sm overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-white dark:bg-neutral-900">
			{/* IMAGE */}
			<div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
				<img
					src={project.img}
					alt={project.title}
					className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
				/>

				{/* OVERLAY */}
				<div className="absolute inset-0 bg-black/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
					<a
						href={project.gitUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
					>
						<Github className="w-5 h-5" />
					</a>

					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
					>
						<SquareArrowOutUpRight className="w-5 h-5" />
					</a>
				</div>
			</div>

			{/* CONTENT */}
			<div className="p-5 sm:p-6 space-y-3">
				<h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>

				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>

				{/* TECHS */}
				<div className="flex flex-wrap gap-2 pt-1">
					{project.techs.map((tech) => (
						<span
							key={tech}
							className="text-xs px-2.5 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
						>
							{tech}
						</span>
					))}
				</div>

				{/* BUTTON */}
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-3 block w-full text-center text-sm sm:text-base bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
				>
					Ver Proyecto
				</a>
			</div>
		</div>
	)
}
