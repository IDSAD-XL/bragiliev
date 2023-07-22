import React from 'react'
import Layout from '../components/layout/Layout'
import RegForm from '../components/elements/RegForm'
import { IAboutContent } from '../types/content/pages/AboutPage'
import PageHead from '../components/elements/PageHead'
import ContentSection from '../components/elements/content-blocks/ContentSection'

interface IAbout extends IAboutContent {}

const AboutPage: React.FC<IAbout> = ({
  layout,
  regFormBlock,
  pageHead,
  contentSections,
}) => {
  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
        <p
          className="mt-[20px] text-[30px] md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead.text ?? '' }}
        />
      </PageHead>
      {contentSections.map((sec, index) => {
        return <ContentSection key={index} {...sec} />
      })}
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default AboutPage
