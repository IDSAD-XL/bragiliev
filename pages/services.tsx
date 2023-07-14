import React from 'react'
import ServicesPage from '../src/pages/ServicesPage'
import { servicesContent } from '../src/mock/services'

const ServicesNextPage: React.FC = () => {
  return <ServicesPage {...servicesContent} />
}

export default ServicesNextPage
