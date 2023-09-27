import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/static-blocks/TitleBlock'
import { IServicesContent } from '../types/content/pages/ServicesPage'
import TabsInfo from '../components/elements/statefull-components/TabsInfo'
import RegForm from '../components/elements/statefull-components/RegForm'

export interface IServices extends IServicesContent {}

const ServicesPage: React.FC<IServices> = ({
  layout,
  infoBlock,
  servicesBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <TitleBlock name={infoBlock.name} title={infoBlock.title} />
      <TabsInfo {...servicesBlock} spacing={'small'} variant={'halfScreen'} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ServicesPage
