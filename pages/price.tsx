import React from 'react'
import PricePage from '../src/pages/PricePage'
import { priceContent } from '../src/mock/price'

const PriceNextPage: React.FC = () => {
  return <PricePage {...priceContent} />
}

export default PriceNextPage
