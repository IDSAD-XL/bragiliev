import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/static-blocks/TitleBlock'
import FiltersPriceBlock from '../components/elements/statefull-components/FiltersPriceBlock'
import { IPricePageContent } from '../types/content/pages/PricePage'
import RegForm from '../components/elements/statefull-components/RegForm'

interface IPrice extends IPricePageContent {}

const PricePage: React.FC<IPrice> = ({
  layout,
  titleBlock,
  filtersPriceBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <TitleBlock name={titleBlock.name} title={titleBlock.title} />
      <FiltersPriceBlock {...filtersPriceBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default PricePage
