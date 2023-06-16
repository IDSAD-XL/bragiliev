import React from 'react'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex h-[392px] w-full justify-center bg-main-bg pt-[83px]">
      <div className="container grid grid-cols-4 grid-rows-[min-content] gap-y-[75px]">
        <div className="col-span-2">
          <h6>
            г. Санкт-Петербург, <br /> Спасский 14/35 (вход с Садовой, 35)
          </h6>
        </div>
        <div>
          <p className="">
            <a href="mailto:bragilev@grandmed.ru" className="title6">
              bragilev@grandmed.ru
            </a>
          </p>
          <p className="mt-[14px] leading-[36px]">
            <a href="tel:+78123275000" className="title6">
              +7( 812) 327-50-00
            </a>
          </p>
        </div>
        <div>
          <p className="text-right">
            <Link href="/" className="link-underlined font-[Inter]">
              TELEGRAM
            </Link>
          </p>
          <p className="mt-[24px] text-right">
            <Link href="/" className="link-underlined font-500 font-[Inter]">
              VKONTAKTE
            </Link>
          </p>
        </div>
        <div>
          <p className="text-light text-light-gray">
            © 2023 BragilevТМ. Все права защищены.
          </p>
        </div>
        <div className="text-light">
          <span>
            <Link href="/" className="link-hover-effect">
              Лицензии и сертификаты
            </Link>
          </span>
        </div>
        <div className="text-light">
          <span>
            <Link href="/" className="link-hover-effect">
              Политика конфиденциальности
            </Link>
          </span>
        </div>
        <div className="text-light text-right">
          <span>
            <Link href="/" className="link-hover-effect">
              Политика обработки персональных данных
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
