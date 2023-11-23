import React from 'react'
import AboutClinicPage from '../src/pages/AboutClinicPage'
import { aboutClinicContent } from '../src/mock/aboutClinic'
import Metadata from '../src/components/layout/Metadata'

const ServiceNextPage: React.FC = () => {
  return (
    <>
      <Metadata
        title={aboutClinicContent?.meta?.title}
        description={aboutClinicContent?.meta?.description}
      />
      <AboutClinicPage {...aboutClinicContent} />
    </>
  )
}

export default ServiceNextPage
