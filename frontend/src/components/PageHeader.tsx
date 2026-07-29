interface PageHeaderProps {
  title: string
  description?: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6 border-b border-[var(--wood)]/15 pb-5 sm:mb-8 sm:pb-6">
      <h1 className="page-title text-[32px] tracking-tight text-[var(--wood)] sm:text-[38px]">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-[var(--wood-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default PageHeader
