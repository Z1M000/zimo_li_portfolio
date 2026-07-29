import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'

const RESUME_PATH = '/Zimo_Li_Resume.pdf'

function Resume() {
  return (
    <PageContainer>
      <PageHeader title="Resume" />

      <div className="mb-10 flex gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 sm:flex-none rounded-full bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-yellow-300 sm:px-6 sm:py-2"
        >
          View Resume
        </a>
        <a
          href={RESUME_PATH}
          download
          className="flex-1 min-w-0 sm:flex-none rounded-full border border-[var(--wood)]/25 bg-[var(--cream-soft)] px-4 py-3 text-center text-sm font-semibold text-[var(--wood)] backdrop-blur-sm hover:bg-[var(--cream)] sm:px-6 sm:py-2"
        >
          Download Resume
        </a>
      </div>

      <div className="glass-card overflow-hidden rounded-2xl">
        <iframe
          title="Resume preview"
          src={RESUME_PATH}
          className="h-screen w-full bg-white"
        />
      </div>
    </PageContainer>
  )
}

export default Resume
