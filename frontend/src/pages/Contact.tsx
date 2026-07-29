import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import { contactInfo } from '../data/contact'

function Contact() {
  return (
    <PageContainer>
      <PageHeader title="Contact" />

      <div className="max-w-xl space-y-6">
        <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
          {contactInfo.message}
        </p>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-neutral-900 sm:w-20">
              Phone
            </span>
            <span className="text-sm text-neutral-700">{contactInfo.phone}</span>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-neutral-900 sm:w-20">
              Email
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="break-all text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-950"
            >
              {contactInfo.email}
            </a>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-neutral-900 sm:w-20">
              LinkedIn
            </span>
            <a
              href={contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-950"
            >
              View profile
            </a>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-neutral-900 sm:w-20">
              GitHub
            </span>
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-950"
            >
              View profile
            </a>
          </li>
        </ul>
      </div>
    </PageContainer>
  )
}

export default Contact
