import React from 'react'
import Layout from '../components/layout/Layout'
import RegForm from '../components/elements/statefull-components/RegForm'
import PageHead from '../components/elements/static-blocks/PageHead'
import { IServiceContent } from '../types/content/pages/ServicePage'
import TabsInfo from '../components/elements/statefull-components/TabsInfo'
import PriceList from '../components/elements/static-blocks/PriceList'
import Results from '../components/elements/statefull-components/Results'
import ContentSection from '../components/elements/dynamic-blocks/ContentSection'

export interface IService extends IServiceContent {}

const ServicesPage: React.FC<IService> = ({
  layout,
  pageHead,
  contentBlock,
  servicesBlock,
  pricesBlock,
  resultsBlock,
  regFormBlock,
  serviceId,
  categoryId,
}) => {
  const scrollToPrice = () => {
    const block = document.querySelector('#servicePrices')
    block?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
        <p
          className="mt-[20px] text-[30px] md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead?.text ?? '' }}
        />
        <p className="mt-[13px] leading-[39px] md:mt-[41px] dsk:mt-[43px]">
          <span
            onClick={scrollToPrice}
            className="link-plus link-plus--white text-white"
          >
            Стоимость
          </span>
        </p>
      </PageHead>
      {contentBlock && <ContentSection {...contentBlock} />}
      {servicesBlock?.tabs && servicesBlock?.tabs?.length > 0 && (
        <TabsInfo {...servicesBlock} spacing={'big'} variant={'fullScreen'} />
      )}
      <div className="h-0 translate-y-[-50px] opacity-0" id="servicePrices" />
      <div className="relative mb-[20px] mt-[90px] flex w-full flex-col items-center">
        <div className="container">
          <p className="text-section-title mb-[20px]">[ операция ]</p>
          {pricesBlock?.list?.prices &&
            pricesBlock?.list?.prices?.length > 0 && (
              <PriceList id="price" {...pricesBlock} />
            )}
        </div>
      </div>
      {resultsBlock?.results && resultsBlock?.results.length > 0 && (
        <Results
          {...resultsBlock}
          spacing={'small'}
          serviceId={serviceId}
          categoryId={categoryId}
        />
      )}
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ServicesPage
