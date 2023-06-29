import React from 'react'
import Header from './Header'
import type { ReactNode } from '../../types/ReactNode'
import Footer from './Footer'
import Menu from './Menu'
import { headerContent } from '../../mock/layout'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Header items={headerContent.items} />
      <Menu />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
