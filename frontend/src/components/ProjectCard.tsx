import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const linkButtonClass =
  'group inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--wood)]/40 bg-[rgba(255,252,245,0.65)] px-4 py-2 text-sm font-semibold text-[var(--wood)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--wood)]/70 hover:bg-[rgba(255,252,245,0.95)] hover:shadow-md'

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkButtonClass}
    >
      {label}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  )
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
        <p className="text-xs tracking-wide text-[var(--wood)]/45 sm:text-sm">
          {project.dateRange}
        </p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-[var(--wood)] sm:text-xl drop-shadow-[0_0_7px_rgba(250,204,21,0.35)]">
          {project.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-[#425715] sm:text-base">
          {project.role}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--wood-muted)] sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--wood)]/10 bg-[rgba(31,18,12,0.04)] px-2 py-0.5 text-[11px] text-[var(--wood)]/65 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-[var(--wood)]/12 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.overviewUrl ? (
              <LinkButton href={project.overviewUrl} label="Overview" />
            ) : null}
            {project.liveSiteUrl ? (
              <LinkButton href={project.liveSiteUrl} label="Live Site" />
            ) : null}
            {project.demoUrl ? (
              <LinkButton href={project.demoUrl} label="Demo" />
            ) : null}
            {project.githubUrl ? (
              <LinkButton href={project.githubUrl} label="GitHub" />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
