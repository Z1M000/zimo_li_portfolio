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
          ? 'absolute inset-x-0 top-0 z-20'
          : 'sticky top-0 z-10 border-b border-neutral-200 bg-white'
      }
    >
      <nav className="mx-auto max-w-5xl px-4 sm:px-6">
        <ul
          className={
            isHome
              ? 'hidden items-center justify-center gap-8 py-5 md:flex'
              : 'hidden items-center gap-1 py-4 md:flex'
          }
        >
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
                        'rounded-md px-3 py-2 text-sm',
                        isActive
                          ? 'bg-neutral-100 font-medium text-neutral-900'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
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
              : '-mx-4 flex md:hidden'
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
                        'flex items-center justify-center px-1 py-3 text-center text-xs',
                        isActive
                          ? 'border-b-2 border-neutral-900 font-medium text-neutral-900'
                          : 'border-b-2 border-transparent text-neutral-500',
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
