import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div
      className={
        isHome
          ? 'home-layout relative flex min-h-screen flex-col'
          : 'page-shell flex min-h-screen flex-col'
      }
    >
      <div aria-hidden="true" className="site-background" />
      <Navbar />
      <main className="flex-1">
        {isHome ? (
          <Outlet />
        ) : (
          <div key={pathname} className="page-transition-fade">
            <Outlet />
          </div>
        )}
      </main>
      {isHome ? null : <Footer />}
    </div>
  )
}

export default Layout
