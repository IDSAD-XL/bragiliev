import React from 'react'
import AboutPage from '../src/pages/AboutPage'
import { aboutContent } from '../src/mock/about'

const AboutNextPage: React.FC = () => {
  return (
    <>
      <AboutPage {...aboutContent} />
    </>
  )
}

export default AboutNextPage
