import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {children}
    </div>
  )
}

export default PageContainer
