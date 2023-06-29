import React, { useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Accordion, { IAccordionContent } from './Accordion'

interface ITabInfoItem {
  title?: string
  content: IAccordionContent[]
}

export interface ITabsInfo {
  tabs?: ITabInfoItem[]
}

const TabsInfo: React.FC<ITabsInfo> = ({ tabs }) => {
  const [openTab, setOpenTab] = useState<number | null>(null)
  const [imagePath, setImagePath] = useState<string>('/assets/main-image-1.png')

  const setImageByIndex = (tabIdx: number, itemIdx: number) => {
    if (tabs) {
      const img = tabs[tabIdx].content[itemIdx].image
      if (img) setImagePath(img)
    }
  }

  return (
    <div className="relative flex w-full flex-col items-center md:h-auto dsk:h-[1130px]">
      <div className="flex-cols-2 container dsk:h-[900px]">
        <div className="flex-[100%] flex-shrink-0 flex-grow-0 pt-[60px] dsk:flex-[50%] dsk:pt-[90px]">
          <Tab.Group
            onChange={() => {
              setOpenTab(null)
            }}
          >
            <Tab.List className="flex w-full">
              {tabs?.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    className="ml-[-1px] h-[60px] flex-[33.3%] border-1 border-half-gray outline-0 ui-selected:bg-blue md:h-[100px]"
                  >
                    <span className="text-regular uppercase ui-selected:text-white">
                      {item.title}
                    </span>
                  </Tab>
                )
              })}
            </Tab.List>
            <Tab.Panels className="mt-[72px] h-full overflow-auto">
              {tabs?.map((item, idx) => {
                return (
                  <Tab.Panel key={idx}>
                    {item.content.map((cont, index) => {
                      const num =
                        index < 9 ? `[0${index + 1}]` : `[${index + 1}]`
                      return (
                        <div className="mb-[24px]" key={index}>
                          <Accordion
                            key={index}
                            name={cont.name}
                            content={cont.content}
                            link={cont.link}
                            number={num}
                            image={cont.image}
                            open={openTab === index}
                            onClick={() => {
                              setOpenTab(index)
                              setImageByIndex(idx, index)
                            }}
                          />
                        </div>
                      )
                    })}
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex-[50%] flex-grow-0"></div>
      </div>
      <div className="flex-cols-2 relative -z-10 !hidden h-auto w-full dsk:absolute dsk:!flex dsk:h-full">
        <div className="flex-grow-1 flex-[100%] flex-shrink-0 dsk:flex-[50%]"></div>
        <div className="relative flex aspect-square flex-[100%] flex-grow-0 overflow-hidden dsk:aspect-auto dsk:flex-[50%]">
          <Image
            className="object-cover object-center"
            src={imagePath}
            fill={true}
            alt={''}
          />
        </div>
      </div>
    </div>
  )
}

export default TabsInfo
