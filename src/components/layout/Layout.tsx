import React from 'react'
import Header, { IHeader } from './Header'
import type { ReactNode } from '../../types/ReactNode'
import Footer from './Footer'
import Menu from './Menu'
import { headerContent } from '../../mock/layout'

interface ILayout extends IHeader {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children, background, textColor }) => {
  return (
    <React.Fragment>
      <Header
        background={background}
        textColor={textColor}
        items={headerContent.items}
      />
      <Menu />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
