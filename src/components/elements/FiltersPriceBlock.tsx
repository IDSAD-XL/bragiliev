import React from 'react'
import Select, { ISelectContent } from './Select'
import PriceList from './PriceList'
import { useResultSlides } from '../../hooks/useResultSlides'
import { ItemWithDependencies } from '../../types/elements/ItemsWithDependecies'

export interface IPriceItem extends ItemWithDependencies {
  title: string
  prices: Array<{
    id: number
    subtitle: string
    price: string
  }>
}

export interface IFiltersPriceBlockContent {
  selects: ISelectContent[]
  services: IPriceItem[]
}

export interface IFiltersPriceBlock extends IFiltersPriceBlockContent {}

const FiltersPriceBlock: React.FC<IFiltersPriceBlock> = ({
  selects = [],
  services,
}) => {
  const {
    activePart,
    activeOperation,
    filteredOperations,
    filteredResults,
    changePart,
    changeOperation,
  } = useResultSlides(selects, services)

  return (
    <div
      className={`text-dark flex w-full justify-center bg-white text-left dsk:justify-center`}
    >
      <div className="container pb-[60px] md:pb-[90px] dsk:pb-[120px]">
        <div className="z-10 grid w-full grid-cols-1 gap-x-[20px] dsk:grid-cols-4">
          <div>
            <Select
              variants={selects[0].variants}
              placeholder={selects[0].placeholder}
              onChange={changePart}
              value={activePart}
              variant={'light'}
            />
          </div>
          <div>
            <Select
              variants={filteredOperations}
              placeholder={selects[1].placeholder}
              onChange={changeOperation}
              value={activeOperation}
              variant={'light'}
            />
          </div>
          <div className="hidden dsk:block"></div>
          <div className="button1 mt-[20px] flex h-[80px] items-center justify-center dsk:mt-[0px]">
            <span className="link-plus no-underline">запись на прием</span>
          </div>
        </div>
        {filteredResults.map((item, index) => (
          <div key={index} className="mt-[30px] dsk:mt-[60px]">
            <PriceList list={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FiltersPriceBlock
