import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'NCAA DIII Champion',
    subtitle: '2025 & 2026',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M8 21h8v-1H8v1Zm4-4a6 6 0 0 0 6-6V4H6v7a6 6 0 0 0 6 6Zm-4.5-9.5h9V11a4.5 4.5 0 1 1-9 0V7.5ZM4 5v2a2 2 0 0 0 2 2V7H4Zm16 0h-2v2a2 2 0 0 0 2-2V5Z" />
      </svg>
    ),
  },
  {
    title: 'Player of the Year',
    subtitle: '2026',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="m12 2.5 2.7 5.5 6 .9-4.4 4.2 1 5.9L12 16.2 6.7 19l1-5.9L3.3 8.9l6-.9L12 2.5Z" />
      </svg>
    ),
  },
  {
    title: '4.0 GPA',
    subtitle: 'Computer Science',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm0 13.2L4.5 12 12 8l7.5 4-7.5 4.2Z" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack Developer',
    subtitle: 'Building impactful solutions',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    ),
  },
]

function Home() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden text-white">
      {/* Mobile-only: blurred atmospheric background (do not blur content) */}
      <div
        aria-hidden="true"
        className="home-mobile-blur-bg fixed inset-0 z-[0] pointer-events-none"
      />

      {/* Frosted left strip — blurs the parent background, no duplicate image */}
      <div
        aria-hidden="true"
        className="hero-left-frost pointer-events-none absolute inset-y-0 left-0 z-[1] hidden sm:block"
      />

      <div className="hero-overlay absolute inset-0 z-[2] hidden sm:block" />
      <div className="hero-overlay-mobile fixed inset-0 z-[2]" />

      <div className="page-transition-fade relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-6 pt-[calc(env(safe-area-inset-top)+24px)] sm:px-6 md:pt-28 lg:px-8">
        <div className="flex flex-1 flex-col justify-center py-8 md:py-12">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <p className="text-xs font-semibold tracking-[0.22em] text-white sm:text-sm">
              HI! I&apos;M
            </p>

            <h1 className="mt-3 text-[3.4rem] font-bold italic leading-none tracking-tight sm:text-[4.1rem] md:text-[5.25rem]">
              <span className="relative inline-block">
                Zimo
                <svg
                  className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full text-yellow-400 sm:-bottom-2 sm:h-4"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 C40 2, 80 10, 120 6 S180 2, 198 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Li
            </h1>

            <p className="mt-4 text-base font-medium text-white sm:mt-5 sm:text-lg md:text-xl">
              Computer Science Student @ Emory
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 sm:text-base">
              Passionate about building software, conducting research, and
              creating impactful solutions.
            </p>

            <img
              src="/hero_bg_original.jpg"
              alt=""
              aria-hidden="true"
              className="home-foreground-photo mt-6"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/experience"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-300"
              >
                View My Work
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-white/20 bg-black/40 px-4 py-5 backdrop-blur-0 sm:backdrop-blur-md sm:px-6">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/40 bg-black/20 text-yellow-400">
                  {item.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="block text-xs text-white/70">{item.subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Home
