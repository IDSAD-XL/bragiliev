import React from 'react'
import { IPriceItem } from '../statefull-components/FiltersPriceBlock'

export interface IPriceList {
  list: IPriceItem
}

const PriceList: React.FC<IPriceList> = ({ list }) => {
  return (
    <div>
      <h4 className="mb-[2px] text-3xl md:text-5xl dsk:mb-[20px]">
        {list.title}
      </h4>
      <ul>
        {list.prices.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center justify-between gap-[1rem] border-b-1 pb-[20px] pt-[28px]"
            >
              <div
                className="flex-[70%] shrink-0 grow-0 break-words text-sm font-medium text-black dsk:max-w-none dsk:text-lg"
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              />
              <div
                className="flex-[30%] shrink-0 grow-0 text-sm font-medium text-black dsk:text-lg"
                dangerouslySetInnerHTML={{ __html: item.price }}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PriceList
