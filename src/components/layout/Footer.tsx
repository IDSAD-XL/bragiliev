import React from 'react'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-full flex-col items-center bg-main-bg pb-[60px] pt-[84px] md:pt-[72px] lg:h-[392px] lg:pt-[83px]">
      <div className="container mb-[75px] grid grid-cols-4 grid-rows-[min-content] gap-y-[50px]">
        <div className="col-span-4 lg:col-span-2">
          <h6>
            г. Санкт-Петербург, <br /> Спасский 14/35 (вход с Садовой, 35)
          </h6>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <p>
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
        <div className="col-span-4 flex flex-col lg:col-span-1">
          <span className="text-left lg:text-right">
            <Link href="/" className="link-underlined font-[Inter]">
              TELEGRAM
            </Link>
          </span>
          <span className="mt-[24px] inline-block text-left lg:text-right">
            <Link href="/" className="link-underlined font-500 font-[Inter]">
              VKONTAKTE
            </Link>
          </span>
        </div>
      </div>
      <div className="container grid grid-cols-4 grid-rows-[min-content] gap-y-[20px] md:gap-y-[15px]">
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <p className="text-light text-light-gray">
            © 2023 BragilevТМ. Все права защищены.
          </p>
        </div>
        <div className="text-light col-span-4 md:col-span-2 lg:col-span-1">
          <span>
            <Link href="/" className="link-hover-effect">
              Лицензии и сертификаты
            </Link>
          </span>
        </div>
        <div className="text-light col-span-4 md:col-span-2 lg:col-span-1">
          <span>
            <Link href="/" className="link-hover-effect">
              Политика конфиденциальности
            </Link>
          </span>
        </div>
        <div className="text-light col-span-4 md:col-span-2 lg:col-span-1 lg:text-right">
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
