import React, { FC } from 'react'
import c from 'classnames'
interface Props {
  className?: string
  el?: HTMLElement
  clean?: boolean
  children?: any
}

const Container: FC<Props> = ({ className, el = 'div', clean, children }) => {
  const rootClassName = c(className, {
    'mx-auto mw-max': !clean,
  })

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any
  return <Component className={rootClassName}>{children}</Component>
}

export default Container