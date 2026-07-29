import type { ReactNode } from 'react'
import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import { contactInfo } from '../data/contact'

const accent = '#6b2435'

const outlineBtnClass =
  'group inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--wood)]/30 bg-transparent px-3 py-2 text-sm font-semibold text-[var(--wood)] transition-all duration-200 hover:border-[var(--wood)]/55 hover:bg-[rgba(31,18,12,0.04)]'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.04 12.04 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  )
}

function InfoRow({
  icon,
  children,
  href,
}: {
  icon: ReactNode
  children: ReactNode
  href?: string
}) {
  const content = href ? (
    <a
      href={href}
      className="text-sm text-[var(--wood-muted)] transition-colors hover:text-[var(--wood)] sm:text-base"
    >
      {children}
    </a>
  ) : (
    <span className="text-sm text-[var(--wood-muted)] sm:text-base">{children}</span>
  )

  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--wood)]/10 bg-[var(--cream)]"
        style={{ color: accent }}
      >
        {icon}
      </span>
      {content}
    </div>
  )
}

function Contact() {
  return (
    <PageContainer>
      <PageHeader title="Contact" />

      <div
        className="w-full max-w-sm rounded-2xl border border-[var(--wood)]/12 bg-[var(--cream-soft)] p-5 shadow-[0_4px_16px_rgba(40,30,10,0.08)] backdrop-blur-[18px] sm:p-6"
      >
        <h2
          className="text-xl font-semibold tracking-tight sm:text-2xl"
          style={{ color: accent }}
        >
          👋 Let's connect!
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--wood-muted)] sm:text-base">
          {contactInfo.message}
        </p>

        <div className="mt-4 space-y-2.5 border-t border-[var(--wood)]/10 pt-4">
          <InfoRow icon={<PhoneIcon />} href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
            {contactInfo.phone}
          </InfoRow>
          <InfoRow icon={<MailIcon />} href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </InfoRow>
          <InfoRow icon={<PinIcon />}>{contactInfo.location}</InfoRow>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={contactInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={outlineBtnClass}
          >
            LinkedIn
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
          <a
            href={contactInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={outlineBtnClass}
          >
            GitHub
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="mt-4 flex items-start gap-2.5 border-t border-[var(--wood)]/10 pt-4">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--wood)]/10 bg-[var(--cream)]"
            style={{ color: accent }}
          >
            <CalendarIcon />
          </span>
          <div>
            <p className="text-xs text-[var(--wood)]/45 sm:text-sm">
              {contactInfo.availableLabel}
            </p>
            <p className="mt-0.5 text-sm font-semibold sm:text-base" style={{ color: accent }}>
              {contactInfo.availableFor}
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Contact
