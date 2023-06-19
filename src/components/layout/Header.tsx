import React, { useEffect, useState } from 'react'
import Burger from './Burger'
import Link from 'next/link'
import { useAppSelector } from '../../hooks/redux'
import { useDebounce } from '../../hooks/useDebounce'

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

  const [haveBg, setHaveBg] = useState<boolean>(false)

  const debouncedValueBg = useDebounce<boolean>(haveBg, 50)

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setHaveBg(false)
    } else {
      setHaveBg(true)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    console.log(debouncedValueBg)
  }, [debouncedValueBg])

  return (
    <React.Fragment>
      <header
        className={`header fixed z-20 flex h-[60px] w-full border-b-1 border-half-gray text-white md:h-[100px] ${
          debouncedValueBg ? 'header--have-bg' : ''
        } ${menuOpen ? 'header--menu-open' : 'header--menu-closed'}`}
      >
        <div className="header__logo flex h-full items-center pl-40">
          <span className={`title-logo`}>Bragilev</span>
        </div>
        <div className="header__items flex w-full justify-end">
          <Link
            className="header__item header__item--hover hidden border-l-1 border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular">Услуги</span>
          </Link>
          <Link
            className="header__item header__item--hover hidden border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular">До/После</span>
          </Link>
          <Link
            className="header__item header__item--hover hidden  border-r-1 border-half-gray dsk:flex"
            href="/"
          >
            <span className="text-regular">Обо мне</span>
          </Link>
          <div className="header__item header__item-big hidden border-l-1 border-r-1 border-half-gray md:flex dsk:border-l-0">
            <span className="link-plus link-plus--white">запись на прием</span>
          </div>
          <div className="header__item header__item--burger flex border-l-1 border-half-gray md:border-l-0">
            <Burger />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
