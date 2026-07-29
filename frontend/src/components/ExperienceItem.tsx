import type { Experience } from '../types'

interface ExperienceItemProps {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <li className="relative pb-8 pl-6 last:pb-0 sm:pb-10 sm:pl-7">
      {/* White timeline line with yellow left/right edges only */}
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-2 w-1.5 -translate-x-1/2 border-x-[1.5px] border-y-0 border-yellow-400 bg-white shadow-[0_0_6px_rgba(250,204,21,0.25)]"
      />
      {/* Marker — yellow border, centered on the line */}
      <span
        aria-hidden="true"
        className="absolute top-2 left-2 z-[1] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-[var(--cream)] shadow-[0_0_6px_rgba(250,204,21,0.45)]"
      />

      <div className="glass-card rounded-2xl p-4 sm:p-5">
        <p className="text-sm text-[var(--wood-muted)] sm:text-base">{experience.dateRange}</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--wood)] sm:text-2xl drop-shadow-[0_0_7px_rgba(250,204,21,0.35)]">
          {experience.role}
        </h2>
        <p className="mt-1 text-base text-[#425715] sm:text-lg">
          <span className="block sm:inline">{experience.organization}</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">{experience.location}</span>
        </p>

        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--wood-muted)] sm:text-base">
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--wood)]/10 bg-[rgba(31,18,12,0.04)] px-2 py-0.5 text-[11px] text-[var(--wood)]/65 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ExperienceItem
