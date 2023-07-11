import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/TitleBlock'
import FiltersPriceBlock from '../components/elements/FiltersPriceBlock'
import { IPricePageContent } from '../types/content/PricePage'
import RegForm from '../components/elements/RegForm'

interface IPrice extends IPricePageContent {}

const Price: React.FC<IPrice> = ({
  titleBlock,
  filtersPriceBlock,
  regFormBlock,
}) => {
  return (
    <Layout background="white" textColor="#26262B">
      <TitleBlock name={titleBlock.name} title={titleBlock.title} />
      <FiltersPriceBlock {...filtersPriceBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default Price
