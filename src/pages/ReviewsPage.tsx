import React from 'react'
import Layout from '../components/layout/Layout'
import TitleBlock from '../components/elements/static-blocks/TitleBlock'
import FiltersReviewsBlock from '../components/elements/statefull-components/FiltersReviewsBlock'
import { IReviewsContent } from '../types/content/pages/ReviewsPage'
import RegForm from '../components/elements/statefull-components/RegForm'
import { useAppDispatch } from '../hooks/redux'
import { openModal } from '../redux/Actions/modalActions'

export interface IReviews extends IReviewsContent {}

const ReviewsPage: React.FC<IReviews> = ({
  layout,
  infoBlock,
  filtersReviewsBlock,
  regFormBlock,
}) => {
  const dispatch = useAppDispatch()

  const leaveReviewHandle = () => {
    openModal(dispatch, { type: 'review_form', content: null })
  }

  return (
    <Layout {...layout}>
      <TitleBlock name={infoBlock.name} title={infoBlock.title}>
        <div
          className="button1 mt-[20px] flex h-[80px] w-full items-center justify-center md:w-[300px] dsk:mt-[0px]"
          onClick={leaveReviewHandle}
        >
          <span className="link-plus no-underline">оставить отзыв</span>
        </div>
      </TitleBlock>
      <FiltersReviewsBlock {...filtersReviewsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ReviewsPage
