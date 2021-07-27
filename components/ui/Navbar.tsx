import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, TrendingUp } from 'react-feather'

/**
 * Navbar Component
 * @returns A component to navigate through the entire website
 */
export function Navbar() {
  const router = useRouter()

  return (
    <nav className="nav container">
      <Link href="/">
        <a className="nav__logo" aria-label="GiFinder logo">
          GiFinder
        </a>
      </Link>
      <ul className="nav__menu">
        <li className="nav__link">
          <Link href="/">
            <a
              aria-label="home link"
              className={router.pathname === '/' ? 'nav__link-active' : ''}
            >
              <Home />
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/trending">
            <a
              aria-label="trending link"
              className={router.pathname === '/trending' ? 'nav__link-active' : ''}
            >
              <TrendingUp />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
