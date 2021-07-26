import Link from 'next/link'
import { Home, TrendingUp } from 'react-feather'

export function Navbar() {
  return (
    <nav className="nav container">
      <Link href="/">
        <a className="nav__logo">GiFinder</a>
      </Link>
      <ul className="nav__menu">
        <li className="nav__link">
          <Link href="/">
            <a>
              <Home />
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/trending">
            <a>
              <TrendingUp />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
