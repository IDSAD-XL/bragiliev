import React, { useEffect, useState } from 'react'
import Select, { ISelectContent, ISelectVariant } from './Select'

export interface IResultsContent {
  name: string
  title: string
  selects: ISelectContent[]
}

export interface IResults extends IResultsContent {}

const Results: React.FC<IResults> = ({ name, title, selects = [] }) => {
  const [activePart, setActivePart] = useState<number | null>(null)
  const [, setActiveOperation] = useState<number>()
  const [filteredOperation, setFilteredOperation] = useState<ISelectVariant[]>(
    selects[1].variants
  )

  const changePart = (val: ISelectVariant) => {
    setActivePart(val.id)
  }

  const changeOperation = (val: ISelectVariant) => {
    setActiveOperation(val.id)
  }

  useEffect(() => {
    let filteredOperations = []
    if (activePart === null) {
      filteredOperations = selects[1].variants
    } else {
      filteredOperations = selects[1].variants.filter((variant) =>
        variant.dependencies?.some(
          (dep) => dep.key === 'part' && dep.id === activePart
        )
      )
    }
    setFilteredOperation(filteredOperations)
  }, [activePart, selects])

  return (
    <div
      className={`flex w-full justify-center bg-dark text-left text-white dsk:justify-center`}
    >
      <div className="container pb-[60px] pt-[60px] md:pb-[90px] dsk:pb-[120px] dsk:pt-[90px]">
        <p className="text-section-title">{name}</p>
        <p className="title2 mt-[20px]">{title}</p>
        <div className="flex w-full flex-wrap gap-x-[20px] md:flex-nowrap">
          <div className="flex-[100%] flex-shrink-0 flex-grow-0 md:flex-[50%] dsk:flex-[25%]">
            <Select
              variants={selects[0].variants}
              placeholder={selects[0].placeholder}
              onChange={changePart}
            />
          </div>
          <div className="flex-[100%] flex-shrink-0 flex-grow-0 md:flex-[50%] dsk:flex-[25%]">
            <Select
              variants={filteredOperation}
              placeholder={selects[1].placeholder}
              onChange={changeOperation}
            />
          </div>
          <div className="flex-shrink-1 hidden flex-[25%] flex-grow-0 dsk:block"></div>
          <div className="hidden flex-[25%] flex-shrink-0 flex-grow-0 dsk:block">
            <div className="button1 flex h-[80px] items-center justify-center">
              <span className="link-plus no-underline">Все кейсы</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
