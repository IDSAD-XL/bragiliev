import React from 'react'
import Price from '../src/pages/PricePage'
import { priceContent } from '../src/mock/price'

const PricePage: React.FC = () => {
  return <Price {...priceContent} />
}

export default PricePage
