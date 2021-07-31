import Image from 'next/image'

export function Footer() {
  return (
    <footer className="footer container">
      <p>
        Coded with 💙 by{' '}
        <a href="https://poly.imjulian.com/" target="_blank" rel="noopener noreferrer">
          <strong>@imjulianeral</strong>
        </a>
      </p>
      <Image src="/giphy.png" alt="giphy logo" width="101" height="36" />
    </footer>
  )
}
