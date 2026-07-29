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
      {!isHome && (
        <>
          <div aria-hidden="true" className="page-blur-bg" />
          <div aria-hidden="true" className="page-tint-overlay" />
        </>
      )}
      <Navbar />
      <main className={isHome ? 'flex-1' : 'relative z-[2] flex-1'}>
        {isHome ? (
          <Outlet />
        ) : (
          <div key={pathname} className="page-transition-fade">
            <Outlet />
          </div>
        )}
      </main>
      {isHome ? null : <div className="relative z-[2]"><Footer /></div>}
    </div>
  )
}

export default Layout
