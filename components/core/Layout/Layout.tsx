import { FC } from 'react'
import { Navbar } from '@components/core'
import { Container } from '@components/ui'
import c from 'classnames'
import l from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={c(l.root)}>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout