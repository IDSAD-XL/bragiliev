import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/TitleBlock'
import { IServicesContent } from '../types/content/ServicesPage'
import TabsInfo from '../components/elements/TabsInfo'
import RegForm from '../components/elements/RegForm'

interface IServices extends IServicesContent {}

const Services: React.FC<IServices> = ({
  infoBlock,
  servicesBlock,
  regFormBlock,
}) => {
  return (
    <Layout background="white" textColor="#26262B">
      <TitleBlock name={infoBlock.name} title={infoBlock.title} />
      <TabsInfo {...servicesBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default Services
