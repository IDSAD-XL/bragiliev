import React from 'react'
import AboutClinicPage from '../src/pages/AboutClinicPage'
import { aboutClinicContent } from '../src/mock/aboutClinic'

const ServiceNextPage: React.FC = () => {
  return <AboutClinicPage {...aboutClinicContent} />
}

export default ServiceNextPage
