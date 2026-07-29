import type { Experience } from '../types'

interface ExperienceItemProps {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <li className="relative border-l border-neutral-300 pb-8 pl-5 last:pb-0 sm:pb-10 sm:pl-6">
      <span
        aria-hidden="true"
        className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border border-neutral-400 bg-white"
      />

      <p className="text-sm text-neutral-500">{experience.dateRange}</p>
      <h2 className="mt-1 text-base font-semibold text-neutral-900 sm:text-lg">
        {experience.role}
      </h2>
      <p className="mt-1 text-sm text-neutral-700 sm:text-base">
        <span className="block sm:inline">{experience.organization}</span>
        <span className="hidden sm:inline"> · </span>
        <span className="block text-neutral-500 sm:inline sm:text-neutral-700">
          {experience.location}
        </span>
      </p>

      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  )
}

export default ExperienceItem
