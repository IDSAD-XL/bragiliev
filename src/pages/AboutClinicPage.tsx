import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import { IAboutClinicContent } from '../types/content/pages/AboutClinicPage'
// import Link from 'next/link'
import RegForm from '../components/elements/RegForm'

interface IAboutClinic extends IAboutClinicContent {}

const AboutClinicPage: React.FC<IAboutClinic> = ({
  layout,
  pageHead,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
        <p
          className="mt-[20px] text-[18px] font-medium leading-[28px] md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead.text ?? '' }}
        />
      </PageHead>
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default AboutClinicPage
