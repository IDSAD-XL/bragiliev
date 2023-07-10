import React from 'react'
import Header from './Header'
import type { ReactNode } from '../../types/ReactNode'
import Footer from './Footer'
import Menu from './Menu'
import { headerContent } from '../../mock/layout'

export type HeaderBg = 'transparent' | 'white' | 'black'
interface ILayout {
  children: ReactNode
  background: HeaderBg
}

const Layout: React.FC<ILayout> = ({ children, background }) => {
  return (
    <React.Fragment>
      <Header background={background} items={headerContent.items} />
      <Menu />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
