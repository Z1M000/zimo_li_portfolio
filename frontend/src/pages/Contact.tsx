import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import { contactInfo } from '../data/contact'

function Contact() {
  return (
    <PageContainer>
      <PageHeader title="Contact" />

      <div className="glass-card max-w-xl space-y-6 rounded-2xl p-5 sm:p-6">
        <p className="text-base leading-relaxed text-[var(--wood-muted)] sm:text-lg">
          {contactInfo.message}
        </p>

        <ul className="divide-y divide-[var(--wood)]/10 border-y border-[var(--wood)]/10">
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-[var(--wood)] sm:w-20 sm:text-base">
              Phone
            </span>
            <span className="text-sm text-[var(--wood-muted)] sm:text-base">
              {contactInfo.phone}
            </span>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-[var(--wood)] sm:w-20 sm:text-base">
              Email
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="break-all text-sm text-[var(--wood-muted)] underline underline-offset-2 hover:text-[var(--gold)] sm:text-base"
            >
              {contactInfo.email}
            </a>
          </li>
          <li className="flex items-center gap-3 py-4 sm:gap-4">
            <a
              href={contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--wood)]/15 bg-[var(--cream-soft)] p-2.5 text-[var(--wood-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="LinkedIn"
              title="View LinkedIn profile"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>

            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--wood)]/15 bg-[var(--cream-soft)] p-2.5 text-[var(--wood-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="GitHub"
              title="View GitHub profile"
            >
              <svg
                viewBox="0 0 19 19"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </PageContainer>
  )
}

export default Contact
