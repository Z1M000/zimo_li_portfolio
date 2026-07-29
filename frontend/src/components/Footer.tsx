function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--wood)]/15 bg-[rgba(247,241,230,0.45)] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--wood-muted)] sm:px-6 lg:px-8">
        © {year} Zimo Li
      </div>
    </footer>
  )
}

export default Footer
