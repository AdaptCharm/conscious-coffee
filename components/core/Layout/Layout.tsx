import { FC } from 'react'
import c from 'classnames'
import l from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={c(l.root)}>
      <main>{children}</main>
    </div>
  )
}