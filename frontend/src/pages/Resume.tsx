import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'

const RESUME_PATH = '/Zimo_Li_Resume.pdf'

function Resume() {
  return (
    <PageContainer>
      <PageHeader title="Resume" />

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-neutral-300 bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-neutral-800 sm:py-2"
        >
          View Resume
        </a>
        <a
          href={RESUME_PATH}
          download
          className="rounded-md border border-neutral-300 bg-white px-4 py-3 text-center text-sm font-medium text-neutral-800 hover:bg-neutral-50 sm:py-2"
        >
          Download Resume
        </a>
      </div>

      <h2 className="mb-3 text-base font-medium text-neutral-900">
        Resume Preview
      </h2>
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <iframe
          title="Resume preview"
          src={RESUME_PATH}
          className="h-screen w-full"
        />
      </div>
    </PageContainer>
  )
}

export default Resume
