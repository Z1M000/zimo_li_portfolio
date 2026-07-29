import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 p-4 sm:p-5">
      <p className="text-sm text-neutral-500">{project.dateRange}</p>
      <h2 className="mt-1 text-base font-semibold text-neutral-900 sm:text-lg">
        {project.title}
      </h2>
      <p className="mt-1 text-sm text-neutral-700">{project.role}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {project.overviewUrl ? (
          <a
            href={project.overviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
          >
            Overview
          </a>
        ) : null}
        {project.liveSiteUrl ? (
          <a
            href={project.liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
          >
            Live Site
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
          >
            Demo
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
