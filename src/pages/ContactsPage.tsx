import React from 'react'
import Layout from '../components/layout/Layout'
import { IContactsContent } from '../types/content/pages/ContactsPage'
import TitleBlock from '../components/elements/TitleBlock'
import Link from 'next/link'
import YandexMap from '../components/elements/YandexMap'
import RegForm from '../components/elements/RegForm'

interface IContacts extends IContactsContent {}

const ContactsPage: React.FC<IContacts> = ({
  layout,
  titleBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <TitleBlock
        name={titleBlock.name}
        title={titleBlock.title}
        variant="dark"
      />
      <div className="flex w-full justify-center bg-dark pt-[70px] dsk:justify-center">
        <div className="container mb-[75px] grid grid-cols-4 grid-rows-[min-content] gap-y-[50px] text-white">
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
      </div>
      <YandexMap />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ContactsPage
