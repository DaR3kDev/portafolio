import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import type { Project } from "~/features/proyect/model/types"

interface ProjectCardProps {
	project: Project
	viewProject: string
}

export default function ProjectCard({ project, viewProject }: ProjectCardProps) {
	return (
		<div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:shadow-xl dark:border-gray-800 dark:bg-neutral-900 dark:hover:border-white">
			<div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
				<img
					src={project.img}
					alt={project.title}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>

				<div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{project.gitUrl && (
						<a
							href={project.gitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full bg-white p-2 text-black transition hover:bg-gray-200"
						>
							<IconBrandGithub className="h-5 w-5" />
						</a>
					)}

					{project.url && (
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full bg-white p-2 text-black transition hover:bg-gray-200"
						>
							<IconExternalLink className="h-5 w-5" />
						</a>
					)}
				</div>
			</div>

			<div className="space-y-3 p-5 sm:p-6">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">{project.title}</h3>

				<p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{project.description}</p>

				<div className="flex flex-wrap gap-2 pt-1">
					{project.techs.map((tech) => (
						<span
							key={tech}
							className="rounded-full bg-gray-200 px-2.5 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200"
						>
							{tech}
						</span>
					))}
				</div>

				{project.url && (
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 block w-full rounded-lg bg-gray-900 py-2.5 text-center text-sm text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:text-base"
					>
						{viewProject}
					</a>
				)}
			</div>
		</div>
	)
}
