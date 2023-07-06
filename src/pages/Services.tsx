import React from "react";
import Layout from '../components/layout/Layout'
import InfoBlock from '../components/elements/InfoBlock'
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
    <div className="services">
      <Layout>
              <InfoBlock name={infoBlock.name} title={infoBlock.title} />
              <TabsInfo {...servicesBlock} />
              <RegForm {...regFormBlock} />
      </Layout>
    </div>
  )
}


export default Services