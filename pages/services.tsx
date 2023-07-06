import React from 'react'
import Services from '../src/pages/Services'
import { servicesContent } from '../src/mock/services'

const ServicesPage: React.FC = () => {
  return <Services {...servicesContent} />
}

export default ServicesPage