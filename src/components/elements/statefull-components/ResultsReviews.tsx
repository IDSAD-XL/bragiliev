import React, { useEffect, useState } from 'react'
import ReviewsItem, { IReviewsItem } from '../static-blocks/ReviewsItem'

export interface IResultReviews {
  slides: IReviewsItem[] | null
}

const ResultsReviews: React.FC<IResultReviews> = ({ slides }) => {
  const [itemsToShow, setItemsToShow] = useState<number>(1)

  function showMore(): void {
    if (!slides) return
    if (itemsToShow >= slides?.length) return

    setItemsToShow((prev) => prev + 6)
  }

  useEffect(() => {
    if (window.innerWidth > 1350) {
      setItemsToShow(6)
    }
  }, [])

  useEffect(() => {
    setItemsToShow(6)
  }, [])

  return (
    <div>
      <div className="mx-auto grid grid-cols-1 gap-[20px] dsk:w-[1276px] dsk:grid-cols-3">
        {slides?.slice(0, itemsToShow).map((item) => {
          return (
            <div
              key={item.id}
              className="mx-auto w-[300px] md:w-[365px] dsk:w-full"
            >
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
      {!(slides && itemsToShow >= slides.length) && (
        <div
          onClick={showMore}
          className="mt-[30px] flex justify-center md:mt-[60px]"
        >
          <div className="button1 flex h-[60px] w-[300px] items-center justify-center md:h-[80px]">
            <span className="link-plus no-underline">показать ещё</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultsReviews
