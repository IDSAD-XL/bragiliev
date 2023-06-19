import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '../../hooks/redux'

const Menu: React.FC = () => {
  const { menuOpen } = useAppSelector((state) => state.appSlice)
  return (
    <menu
      className={`menu fixed z-10 h-full w-full overflow-auto bg-main-bg transition-transform duration-500 ease-in-out ${
        menuOpen
          ? 'menu--open pointer-events-auto translate-y-0'
          : 'menu--closed pointer-events-none translate-y-[-100%]'
      }`}
    >
      <div className="menu__body mt-[100px] flex flex-col justify-center pt-[62px]">
        <div className="menu__items flex flex-col justify-center gap-[30px] text-center">
          <Link href="/" className="link-menu">
            Услуги
          </Link>
          <Link href="/" className="link-menu">
            До/после
          </Link>
          <Link href="/" className="link-menu">
            Обо мне
          </Link>
          <Link href="/" className="link-menu">
            О клинике
          </Link>
          <Link href="/" className="link-menu">
            Отзывы
          </Link>
          <Link href="/" className="link-menu">
            Стоимость
          </Link>
          <Link href="/" className="link-menu">
            Контакты
          </Link>
        </div>
        <div className="menu__footer mt-[80px] text-center">
          <p className="text-regular">
            г. Санкт-Петербург, <br /> Спасский 14/35 (вход с Садовой, 35)
          </p>
          <p className="mt-[30px]">
            <a href="mailto:bragilev@grandmed.ru" className="text-regular">
              bragilev@grandmed.ru
            </a>
          </p>
          <p className="leading-[36px]">
            <a href="tel:+78123275000" className="text-regular">
              +7( 812) 327-50-00
            </a>
          </p>
          <p className="gap mt-[47px] flex justify-center gap-[54px]">
            <Link href="/" className="link-underlined font-[Inter]">
              TELEGRAM
            </Link>
            <Link href="/" className="link-underlined font-500 font-[Inter]">
              VKONTAKTE
            </Link>
          </p>
        </div>
      </div>
    </menu>
  )
}

export default Menu
