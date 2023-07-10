import React from 'react'
import ReviewsItem, { IReviewsItem } from './ReviewsItem'

export interface IResultReviews {
  slides: IReviewsItem[]
}

const ResultsReviews: React.FC<IResultReviews> = ({ slides }) => {
  return (
    <div>
      {slides.map((item) => {
        return (
          <div key={item.id} className="!w-[365px] dsk:!w-[auto]">
            <ReviewsItem
              id={item.id}
              name={item.name}
              date={item.date}
              link={item.link}
              content={item.content}
              image={item.image}
            />
          </div>
        )
      })}
    </div>
    // <Swiper
    //   slidesPerView={'auto'}
    //   spaceBetween={20}
    //   breakpoints={{
    //     1351: {
    //       slidesPerView: 4,
    //     },
    //   }}
    //   className="swiper-reviews !flex cursor-grab justify-center"
    // >
    //   {slides.map((item) => {
    //     return (
    //       <SwiperSlide key={item.id} className="!w-[365px] dsk:!w-[auto]">
    //         <ReviewsItem
    //           id={item.id}
    //           name={item.name}
    //           date={item.date}
    //           link={item.link}
    //           content={item.content}
    //           //   image={item.image}
    //         />
    //       </SwiperSlide>
    //     )
    //   })}
    // </Swiper>
  )
}

export default ResultsReviews
