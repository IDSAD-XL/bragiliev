import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/TitleBlock'
import { IServicesContent } from '../types/content/pages/ServicesPage'
import TabsInfo from '../components/elements/TabsInfo'
import RegForm from '../components/elements/RegForm'

interface IServices extends IServicesContent {}

const ServicesPage: React.FC<IServices> = ({
  layout,
  infoBlock,
  servicesBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <TitleBlock name={infoBlock.name} title={infoBlock.title} />
      <TabsInfo {...servicesBlock} spacing={'small'} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ServicesPage
