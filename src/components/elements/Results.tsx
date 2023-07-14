import React, { useCallback, useEffect, useState } from 'react'
import Select, {
  ISelectContent,
  ISelectVariant,
  ISelectVariantDependence,
} from './Select'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import ResultsSlider from './ResultsSlider'
import Link from 'next/link'

export interface IResultsSlides {
  id: number
  title: string
  subtitle?: string
  images: {
    before1: string
    before2: string
    after1: string
    after2: string
  }
  dependencies: ISelectVariantDependence[]
}

export interface IResultsContent {
  name: string
  title: string
  selects: ISelectContent[]
  results: IResultsSlides[]
  link: string
}

export interface IResults extends IResultsContent {
  spacing: 'big' | 'small'
}

const Results: React.FC<IResults> = ({
  name,
  title,
  selects = [],
  results,
  link,
  spacing,
}) => {
  const spacingStyle = spacing === 'big' ? 'mt-[60px] md:mt-[100px]' : 'mt-0'

  const [activePart, setActivePart] = useState<ISelectVariant | null>(null)
  const [activeOperation, setActiveOperation] = useState<ISelectVariant | null>(
    null
  )
  const [filteredOperations, setFilteredOperations] = useState<
    ISelectVariant[]
  >(selects[1].variants)

  const [filteredResults, setFilteredResults] = useState<
    IResultsSlides[] | null
  >(results)

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
        filter = (item: IResultsSlides) => {
          return (
            item.dependencies.find((dep) => dep.key === 'operation')?.id ===
            operation
          )
        }
      } else if (part) {
        filter = (item: IResultsSlides) => {
          return (
            item.dependencies.find((dep) => dep.key === 'part')?.id === part
          )
        }
      }

      if (filter) {
        result = results.filter(filter)
      } else {
        result = results
      }
      return result
    },
    [results]
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
      className={`flex w-full justify-center bg-dark text-left text-white dsk:justify-center`}
    >
      <div
        className={`container pb-[60px] pt-[60px] md:pb-[90px] dsk:pb-[120px] dsk:pt-[90px] ${spacingStyle}`}
      >
        <p className="text-section-title">{name}</p>
        <p className="title2 mt-[20px]">{title}</p>
        <div className="z-10 grid w-full grid-cols-1 gap-x-[20px] lg:grid-cols-2 dsk:grid-cols-4">
          <div>
            <Select
              variants={selects[0].variants}
              placeholder={selects[0].placeholder}
              onChange={changePart}
              value={activePart}
              variant={'dark'}
            />
          </div>
          <div>
            <Select
              variants={filteredOperations}
              placeholder={selects[1].placeholder}
              onChange={changeOperation}
              value={activeOperation}
              variant={'dark'}
            />
          </div>
          <div className="hidden dsk:block"></div>
          <div className="hidden dsk:block">
            <Link
              href={link ?? '#'}
              className="button1 flex h-[80px] items-center justify-center"
            >
              <span className="link-plus no-underline">Все кейсы</span>
            </Link>
          </div>
        </div>
        <div className="mt-[30px] dsk:mt-[27px]">
          <ResultsSlider slides={filteredResults} />
        </div>
        <div className="mt-[30px] flex justify-center md:mt-[60px] dsk:hidden">
          <div>
            <Link
              className="button1 flex h-[60px] w-[300px] items-center justify-center md:h-[80px]"
              href={link ?? '#'}
            >
              <span className="link-plus no-underline">Все кейсы</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
