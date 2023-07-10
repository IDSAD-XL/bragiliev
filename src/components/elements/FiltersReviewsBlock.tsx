import React, { useCallback, useEffect, useState } from 'react'
import Select, {
  ISelectContent,
  ISelectVariant,
  ISelectVariantDependence,
} from './Select'
import ResultsReviews from './ResultsReviews'

export interface IReviewsItem {
  id: number
  date: string
  name: string
  content: string
  link: string
  image?: string
  dependencies: ISelectVariantDependence[]
}

export interface IFiltersReviewsBlockContent {
  selects: ISelectContent[]
  slides: IReviewsItem[]
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

  const [filteredRevies, setFilteredResults] = useState<IReviewsItem[] | null>(
    slides
  )

  const changePart = (val: ISelectVariant) => {
    setActivePart(val)
    setActiveOperation(null)
    console.log(filteredRevies)
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
        filter = (item: IReviewsItem) => {
          console.log(item)

          return (
            item.dependencies.find((dep) => dep.key === 'operation')?.id ===
            operation
          )
        }
      } else if (part) {
        filter = (item: IReviewsItem) => {
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
      // console.log(filteredRevies)
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
        <div className="z-10 grid w-full grid-cols-1 gap-x-[20px] lg:grid-cols-2 dsk:grid-cols-4">
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
          <div className="hidden dsk:block">
            <div className="button1 flex h-[80px] items-center justify-center">
              <span className="link-plus no-underline">оставить отзыв</span>
            </div>
          </div>
        </div>
        <div className="dsk:none mt-[30px] dsk:mt-[27px]">
          <ResultsReviews slides={filteredRevies} />
        </div>
        <div className="mt-[30px] flex justify-center md:mt-[60px] dsk:hidden">
          <div className="button1 flex h-[60px] w-[300px] items-center justify-center md:h-[80px]">
            <span className="link-plus no-underline">оставить отзыв</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersReviewsBlock
