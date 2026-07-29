import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="h-40 w-full overflow-hidden rounded-t-2xl sm:h-48 md:h-58">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm text-[var(--wood-muted)] sm:text-base">
          {project.dateRange}
        </p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--wood)] sm:text-2xl drop-shadow-[0_0_7px_rgba(250,204,21,0.35)]">
          {project.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-[var(--olive)] sm:text-base">
          {project.role}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--wood-muted)] sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--gold)]/25 bg-[var(--gold-soft)] px-2.5 py-1 text-xs text-[var(--wood)] sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm sm:text-base">
          {project.overviewUrl ? (
            <a
              href={project.overviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--wood)] underline underline-offset-2 hover:text-[var(--gold)]"
            >
              Overview
            </a>
          ) : null}
          {project.liveSiteUrl ? (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--wood)] underline underline-offset-2 hover:text-[var(--gold)]"
            >
              Live Site
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--wood)] underline underline-offset-2 hover:text-[var(--gold)]"
            >
              Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--wood)] underline underline-offset-2 hover:text-[var(--gold)]"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
