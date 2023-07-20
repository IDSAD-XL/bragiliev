import React from 'react'
import Layout from '../components/layout/Layout'
import RegForm from '../components/elements/RegForm'
import PageHead from '../components/elements/PageHead'
import { IServiceContent } from '../types/content/pages/ServicePage'
import TabsInfo from '../components/elements/TabsInfo'
import PriceList from '../components/elements/PriceList'
import Results from '../components/elements/Results'

interface IService extends IServiceContent {}

const ServicesPage: React.FC<IService> = ({
  layout,
  pageHead,
  servicesBlock,
  pricesBlock,
  resultsBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
        <p
          className="mt-[20px] text-[30px] md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead.text ?? '' }}
        />
        <p className="mt-[13px] leading-[39px] md:mt-[41px] dsk:mt-[43px]">
          <span className="link-plus link-plus--white text-white">
            Стоимость
          </span>
        </p>
      </PageHead>
      <TabsInfo {...servicesBlock} spacing={'big'} variant={'fullScreen'} />
      <div className="relative mb-[20px] mt-[90px] flex w-full flex-col items-center">
        <div className="container dsk:h-[900px]">
          <p className="text-section-title mb-[20px]">[ операция ]</p>
          <PriceList {...pricesBlock} />
        </div>
      </div>
      <Results {...resultsBlock} spacing={'small'} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ServicesPage
