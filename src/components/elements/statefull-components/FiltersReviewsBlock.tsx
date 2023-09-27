import React from 'react'
import { ISelectContent } from '../stateless-components/Select'
import ResultsReviews from './ResultsReviews'
import { IReviewsItem } from '../static-blocks/ReviewsItem'
import { ItemWithDependencies } from '../../../types/elements/ItemsWithDependecies'

export interface IReviewsFiltersItem
  extends IReviewsItem,
    ItemWithDependencies {}

export interface IFiltersReviewsBlockContent {
  selects: ISelectContent[]
  slides: IReviewsFiltersItem[]
}

export interface IFiltersReviewsBlock extends IFiltersReviewsBlockContent {}

const FiltersReviewsBlock: React.FC<IFiltersReviewsBlock> = ({
  selects = [],
  slides,
}) => {
  return (
    <div
      className={`text-dark flex w-full justify-center bg-white text-left dsk:justify-center`}
    >
      <div className="container pb-[60px] md:pb-[90px] dsk:pb-[120px] dsk:pt-0">
        <div className="dsk:none mt-[30px] dsk:mt-[60px]">
          <ResultsReviews slides={slides} />
        </div>
      </div>
    </div>
  )
}

export default FiltersReviewsBlock
