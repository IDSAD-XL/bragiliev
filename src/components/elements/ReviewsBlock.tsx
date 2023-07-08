import React from 'react'
import ReviewsSlider from './ReviewsSlider'
import { IReviewsItem } from './ReviewsItem'
import Link from 'next/link'

export interface IReviewsBlockContent {
  name: string
  title: string
  slides: IReviewsItem[]
  link: string
}

export interface IReviewsBlock extends IReviewsBlockContent {}

const ReviewsBlock: React.FC<IReviewsBlock> = ({ name, title, slides }) => {
  return (
    <div className="flex w-full flex-col items-center bg-secondary pb-[60px] pt-[60px] md:pb-[90px] md:pt-[90px] dsk:justify-center">
      <div className="container">
        <p className="text-section-title">{name}</p>
        <p className="title2 mt-[20px]">{title}</p>
      </div>
      <div className="mt-[40px] w-full">
        <ReviewsSlider slides={slides} />
      </div>
      <div className="container mt-[40px] flex justify-center md:mt-[55px] dsk:mt-[60px]">
        <Link href="/reviews" className="link-plus uppercase">
          все отзывы
        </Link>
      </div>
    </div>
  )
}

export default ReviewsBlock
