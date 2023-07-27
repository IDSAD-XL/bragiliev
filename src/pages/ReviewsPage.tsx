import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/static-blocks/TitleBlock'
import FiltersReviewsBlock from '../components/elements/statefull-components/FiltersReviewsBlock'
import { IReviewsContent } from '../types/content/pages/ReviewsPage'
import RegForm from '../components/elements/statefull-components/RegForm'

interface IReviews extends IReviewsContent {}

const ReviewsPage: React.FC<IReviews> = ({
  layout,
  infoBlock,
  filtersReviewsBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <TitleBlock name={infoBlock.name} title={infoBlock.title} />
      <FiltersReviewsBlock {...filtersReviewsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ReviewsPage
