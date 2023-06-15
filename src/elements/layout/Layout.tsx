import React from 'react'
import Header from './Header'
import { ReactNode } from '../../types/ReactNode'
import Footer from './Footer'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="h-full flex-1">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
