import { FC } from 'react'
import { Navbar } from '@components/core'
import { Container } from '@components/ui'

const Layout: FC = ({ children }) => {
  return (
    <div className="bg-primary mx-auto mw-max h-full ox-none">
      <header className="fixed z-100">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout