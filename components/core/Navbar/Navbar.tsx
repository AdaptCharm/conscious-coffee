import { FC } from 'react'
import Link from 'next/link'
import { Logo } from '@components/ui'
import n from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <div className={n.root}>
      <Link href="/">
        <a className={n.logo} aria-label="Logo">
          <Logo size={8} />
        </a>
      </Link>
      <nav>
        <Link href="/">
          <a className={n.link}>Home</a>
        </Link>
        <Link href="/about-us">
          <a className={n.link}>About us</a>
        </Link>
        <Link href="/locations">
          <a className={n.link}>Our Locations</a>
        </Link>
        <Link href="/contact">
          <a className={n.link}>Contact</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar