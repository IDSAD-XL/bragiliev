import React from 'react'
import AboutPage from '../src/pages/AboutPage'
import { aboutContent } from '../src/mock/about'
import Metadata from '../src/components/layout/Metadata'

const AboutNextPage: React.FC = () => {
  return (
    <>
      <Metadata
        title={aboutContent?.meta?.title}
        description={aboutContent?.meta?.description}
      />
      <AboutPage {...aboutContent} />
    </>
  )
}

export default AboutNextPage
