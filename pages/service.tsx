import React from 'react'
import ServicePage from '../src/pages/ServicePage'
import { serviceContent } from '../src/mock/service'

const ServiceNextPage: React.FC = () => {
  return <ServicePage {...serviceContent} />
}

export default ServiceNextPage
