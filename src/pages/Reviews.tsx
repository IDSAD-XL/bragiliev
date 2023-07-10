import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/TitleBlock'
import FiltersReviewsBlock from '../components/elements/FiltersReviewsBlock'
import { IReviewsContent } from '../types/content/ReviewsPage'
import RegForm from '../components/elements/RegForm'

interface IReviews extends IReviewsContent {}

const Services: React.FC<IReviews> = ({
  infoBlock,
  filtersReviewsBlock,
  regFormBlock,
}) => {
  return (
    <Layout background="white" textColor="#26262B">
      <TitleBlock name={infoBlock.name} title={infoBlock.title} />
      <FiltersReviewsBlock {...filtersReviewsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default Services
