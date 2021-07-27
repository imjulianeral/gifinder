import Link from 'next/link'
import { Home, TrendingUp } from 'react-feather'

export function Navbar() {
  return (
    <nav className="nav container">
      <Link href="/">
        <a className="nav__logo" aria-label="GiFinder">
          GiFinder
        </a>
      </Link>
      <ul className="nav__menu">
        <li className="nav__link">
          <Link href="/">
            <a aria-label="home link">
              <Home />
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/trending">
            <a aria-label="trending link">
              <TrendingUp />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
