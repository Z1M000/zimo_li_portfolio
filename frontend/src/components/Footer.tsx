function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500 sm:px-6">
        © {year} Zimo Li
      </div>
    </footer>
  )
}

export default Footer
