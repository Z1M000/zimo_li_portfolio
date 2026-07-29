import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header
      className={
        isHome
          ? 'sticky top-0 z-20 sm:absolute sm:inset-x-0 sm:top-0'
          : 'sticky top-0 z-20 border-b border-white/40 bg-[rgba(247,241,230,0.72)] backdrop-blur-md'
      }
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="hidden items-center justify-center gap-8 py-4 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isHome
                    ? [
                        'border-b-2 pb-1 text-sm font-medium text-white',
                        isActive
                          ? 'border-yellow-400'
                          : 'border-transparent hover:border-white/50',
                      ].join(' ')
                    : [
                        'border-b-2 pb-1 text-sm font-medium text-[var(--wood)]',
                        isActive
                          ? 'border-yellow-400'
                          : 'border-transparent hover:border-[var(--olive)]/50',
                      ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul
          className={
            isHome
              ? '-mx-4 flex bg-black/30 md:hidden'
              : '-mx-4 flex border-t border-[var(--wood)]/10 md:hidden'
          }
        >
          {links.map((link) => (
            <li key={link.to} className="min-w-0 flex-1">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isHome
                    ? [
                        'flex items-center justify-center px-1 py-3 text-center text-xs text-white',
                        isActive
                          ? 'border-b-2 border-yellow-400 font-medium'
                          : 'border-b-2 border-transparent',
                      ].join(' ')
                    : [
                        'flex items-center justify-center px-1 py-3 text-center text-xs text-[var(--wood)]',
                        isActive
                          ? 'border-b-2 border-yellow-400 font-medium'
                          : 'border-b-2 border-transparent',
                      ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
