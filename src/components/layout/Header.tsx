import React from 'react'
import Burger from './Burger'
import Link from 'next/link'
import { useAppSelector } from '../../hooks/redux'

interface IHeaderContent {
  items?: Array<{
    name: string
    link?: string
    count?: number
    icon?: string
  }>
}

// const headerContent: IHeaderContent = {
//   items: [
//     {
//       name: 'Услуги',
//       link: '/services',
//     },
//     {
//       name: 'До/После',
//       link: '/services',
//     },
//     {
//       name: 'Обо мне',
//       link: '/services',
//     },
//   ],
// }

interface IHeader extends IHeaderContent {}

const Header: React.FC<IHeader> = () => {
  const { menuOpen } = useAppSelector((state) => state.appSlice)

  return (
    <React.Fragment>
      <header
        className={`fixed z-20 flex h-100 w-full border-b-1 border-half-gray ${
          menuOpen ? 'header--menu-open' : 'header--menu-closed'
        }`}
      >
        <div className="header__logo flex h-full items-center pl-40">
          <span style={{ fontWeight: '700' }} className={`title5 text-white`}>
            Bragilev
          </span>
        </div>
        <div className="header__items flex w-full justify-end">
          <Link
            className="header__item header__item--hover hidden border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular text-white">Услуги</span>
          </Link>
          <Link
            className="header__item header__item--hover hidden border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular text-white">До/После</span>
          </Link>
          <Link
            className="header__item header__item--hover hidden  border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular text-white">Обо мне</span>
          </Link>
          <div className="header__item header__item-big flex border-r-1 border-half-gray">
            <span className="link-plus link-plus--white text-white">
              запись на прием
            </span>
          </div>
          <div className="header__item flex">
            <Burger />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header