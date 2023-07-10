import React, { useEffect, useState } from 'react'
import ReviewsItem, { IReviewsItem } from './ReviewsItem'

export interface IResultReviews {
  slides: IReviewsItem[] | null
}

const ResultsReviews: React.FC<IResultReviews> = ({ slides }) => {
  const [filteredReviews] = useState<IReviewsItem[] | null>(slides)
  const [itemsToShow, setItemsToShow] = useState<number>(1)
  const [currnetNumber, setCurrnetNumber] = useState<number>(1)

  function showMore(): void {
    console.log(currnetNumber, slides?.length)
    if (currnetNumber >= slides?.length) {
      console.log(slides?.length)
      return
    }
    setCurrnetNumber(currnetNumber + itemsToShow)
  }

  useEffect(() => {
    if (window.innerWidth > 1350) {
      setCurrnetNumber(6)
      setItemsToShow(6)
    }
  }, [])
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 gap-[20px] dsk:w-[1276px] dsk:grid-cols-3">
        {filteredReviews?.slice(0, currnetNumber).map((item) => {
          return (
            <div
              key={item.id}
              className="mx-auto w-[300px] md:w-[365px] dsk:w-[auto]"
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
      {!(currnetNumber >= slides.length) && (
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
