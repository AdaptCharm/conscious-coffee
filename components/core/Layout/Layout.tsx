import { FC } from 'react'
import { Navbar } from '@components/core'
import { Container } from '@components/ui'

const Layout: FC = ({ children }) => {
  return (
    <div>
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