import React, { useCallback, useEffect, useState } from 'react'
import Select, {
  ISelectContent,
  ISelectVariant,
  ISelectVariantDependence,
} from './Select'
import ResultsReviews from './ResultsReviews'
import { IReviewsItem } from './ReviewsItem'

export interface IReviewsFiltesItem extends IReviewsItem {
  dependencies: ISelectVariantDependence[]
}

export interface IFiltersReviewsBlockContent {
  selects: ISelectContent[]
  slides: IReviewsFiltesItem[]
}

export interface IFiltersReviewsBlock extends IFiltersReviewsBlockContent {}

const FiltersReviewsBlock: React.FC<IFiltersReviewsBlock> = ({
  selects = [],
  slides,
}) => {
  const [activePart, setActivePart] = useState<ISelectVariant | null>(null)
  const [activeOperation, setActiveOperation] = useState<ISelectVariant | null>(
    null
  )
  const [filteredOperations, setFilteredOperations] = useState<
    ISelectVariant[]
  >(selects[1].variants)

  const [filteredRevies, setFilteredResults] = useState<
    IReviewsFiltesItem[] | null
  >(slides)

  const changePart = (val: ISelectVariant) => {
    setActivePart(val)
    setActiveOperation(null)
  }

  const changeOperation = useCallback(
    (val: ISelectVariant) => {
      const findDep = val?.dependencies?.find(({ key }) => key === 'part')
      if (findDep) {
        if (activePart?.id !== findDep.id) {
          const findValue = selects[0].variants.find(
            ({ id }) => id === findDep.id
          )
          if (findValue) setActivePart(findValue)
        }
      }
      setActiveOperation(val)
    },
    [activePart, selects]
  )

  const filter = useCallback(
    (part: number | null | undefined, operation: number | null | undefined) => {
      let filter, result
      if (part && operation) {
        filter = (item: IReviewsFiltesItem) => {
          return (
            item.dependencies.find((dep) => dep.key === 'operation')?.id ===
            operation
          )
        }
      } else if (part) {
        filter = (item: IReviewsFiltesItem) => {
          return (
            item.dependencies.find((dep) => dep.key === 'part')?.id === part
          )
        }
      }

      if (filter) {
        result = slides.filter(filter)
      } else {
        result = slides
      }
      return result
    },
    [slides]
  )

  useEffect(() => {
    let filteredOperations
    if (activePart === null) {
      filteredOperations = selects[1].variants
    } else {
      filteredOperations = selects[1].variants.filter((variant) =>
        variant.dependencies?.some(
          (dep) => dep.key === 'part' && dep.id === activePart.id
        )
      )
    }

    setFilteredOperations(filteredOperations)

    const filteredSlides = filter(activePart?.id, activeOperation?.id)

    if (filteredSlides) {
      setFilteredResults(filteredSlides?.length > 0 ? filteredSlides : null)
    }
  }, [activePart, activeOperation, selects, filter])

  return (
    <div
      className={`text-dark flex w-full justify-center bg-white text-left dsk:justify-center`}
    >
      <div className="container pb-[60px] md:pb-[90px] dsk:pb-[120px] dsk:pt-[90px]">
        <div className="z-10 grid w-full grid-cols-1 gap-x-[20px] dsk:grid-cols-4">
          <div>
            <Select
              variants={selects[0].variants}
              placeholder={selects[0].placeholder}
              onChange={changePart}
              value={activePart}
            />
          </div>
          <div>
            <Select
              variants={filteredOperations}
              placeholder={selects[1].placeholder}
              onChange={changeOperation}
              value={activeOperation}
            />
          </div>
          <div className="hidden dsk:block"></div>
          <div className="button1 mt-[20px] flex h-[80px] items-center justify-center dsk:mt-[0px]">
            <span className="link-plus no-underline">оставить отзыв</span>
          </div>
        </div>
        <div className="dsk:none mt-[30px] dsk:mt-[60px]">
          <ResultsReviews slides={filteredRevies} />
        </div>
      </div>
    </div>
  )
}

export default FiltersReviewsBlock
