import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewsItem, { IReviewsItem } from './ReviewsItem'

export interface IReviewsSlider {
  slides: IReviewsItem[]
}

const ReviewsSlider: React.FC<IReviewsSlider> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={20}
      breakpoints={{
        1351: {
          slidesPerView: 4,
        },
      }}
      className="swiper-reviews !flex cursor-grab justify-center"
    >
      {slides.map((item) => {
        return (
          <SwiperSlide key={item.id} className="!w-[300px] md:!w-[365px] dsk:!w-[412px]">
            <ReviewsItem
              id={item.id}
              name={item.name}
              date={item.date}
              link={item.link}
              content={item.content}
              image={item.image}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ReviewsSlider
