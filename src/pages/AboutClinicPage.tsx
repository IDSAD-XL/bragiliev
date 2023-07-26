import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import AboutClinicBlock from '../components/elements/AboutClinicBlock'
import { IAboutClinicContent } from '../types/content/pages/AboutClinicPage'
// import Link from 'next/link'
import RegForm from '../components/elements/RegForm'

interface IAboutClinic extends IAboutClinicContent {}

const AboutClinicPage: React.FC<IAboutClinic> = ({
  layout,
  pageHead,
  aboutClinicBlock,
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
      <AboutClinicBlock {...aboutClinicBlock}>
        <h5
          className="text-[18px] leading-[28px] dsk:w-[566px] dsk:min-w-[566px] dsk:text-[30px] dsk:leading-[135%] dsk:tracking-[1px]"
          dangerouslySetInnerHTML={{ __html: aboutClinicBlock.text }}
        />
        <p
          className="text-[14px] font-[500] leading-[22px] dsk:w-[461px] dsk:min-w-[461px]"
          dangerouslySetInnerHTML={{ __html: aboutClinicBlock.subtext }}
        />
      </AboutClinicBlock>
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default AboutClinicPage
