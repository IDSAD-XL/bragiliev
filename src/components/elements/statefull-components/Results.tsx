import React from 'react'
import Select, { ISelectContent } from '../stateless-components/Select'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import ResultsSlider from '../static-blocks/ResultsSlider'
import Link from 'next/link'
import { ItemWithDependencies } from '../../../types/elements/ItemsWithDependecies'
import { useResultSlides } from '../../../hooks/useResultSlides'

export interface IResultsSlide extends ItemWithDependencies {
  id: string
  title: string
  subtitle?: string
  isAdult: boolean
  images: {
    before1: string
    before2: string
    after1: string
    after2: string
  }
  services: Array<{
    id: string
    link: string
    title: string
  }>
}

export interface IResultsContent {
  name: string
  title: string
  selects: ISelectContent[]
  results: IResultsSlide[]
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

  const {
    activePart,
    activeOperation,
    filteredOperations,
    filteredResults,
    changePart,
    changeOperation,
  } = useResultSlides(selects, results)

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
