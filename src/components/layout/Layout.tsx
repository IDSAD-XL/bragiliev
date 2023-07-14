import React from 'react'
import Header, { IHeader } from './Header'
import Footer from './Footer'
import Menu from './Menu'
import { headerContent } from '../../mock/layout'

export interface ILayout {
  header: IHeader
}

const Layout: React.FC<ILayout> = ({ children, header }) => {
  return (
    <React.Fragment>
      <Header items={headerContent.items} {...header} />
      <Menu />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
