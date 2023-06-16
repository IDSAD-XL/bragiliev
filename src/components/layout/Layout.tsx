import React from 'react'
import Header from './Header'
import type { ReactNode } from '../../types/ReactNode'
import Footer from './Footer'
import Menu from './Menu'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
