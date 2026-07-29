interface PageHeaderProps {
  title: string
  description?: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6 border-b border-neutral-200 pb-5 sm:mb-8 sm:pb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default PageHeader
