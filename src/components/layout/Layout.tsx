import React, { useEffect } from 'react'
import Header, { IHeader } from './Header'
import Footer from './Footer'
import Menu from './Menu'
import { headerContent } from '../../mock/layout'
import { useAppDispatch } from '../../hooks/redux'
import { setIsAdult } from '../../redux/Actions/appActions'

export interface ILayout {
  header: IHeader
}

const Layout: React.FC<ILayout> = ({ children, header }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isAdultStorage = localStorage.getItem('isAdult')
    const isAdult = isAdultStorage === 'true'
    if (isAdult) {
      setIsAdult(dispatch, isAdult)
    }
  }, [dispatch])
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
