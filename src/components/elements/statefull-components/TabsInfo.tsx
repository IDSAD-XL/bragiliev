import React, { useLayoutEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Accordion, { IAccordionContent } from '../stateless-components/Accordion'
import Select, { ISelectVariant } from '../stateless-components/Select'
import ImageWithDomain from '../stateless-components/ImageWithDomain'

export interface ITabInfoItem {
  name: string
  image?: string
  link?: string
  content: IAccordionContent[]
}

export interface ITabsInfoContent {
  tabs?: ITabInfoItem[]
  sectionName?: string
}

export interface ITabsInfo extends ITabsInfoContent {
  spacing: 'big' | 'small'
  variant: 'halfScreen' | 'fullScreen'
}

interface tabsSettings {
  wrapperOuter: string
  wrapperInner: string
  container: string
  tabsClasses: string
  panelSpacing: string
  mobileDropdown: boolean
}

const tabsStylesVariant: Record<ITabsInfo['variant'], tabsSettings> = {
  halfScreen: {
    wrapperOuter: 'md:h-auto dsk:h-[1130px]',
    wrapperInner: 'dsk:h-[900px]',
    container: 'flex-[100%] flex-shrink-0 flex-grow-0 dsk:flex-[50%]',
    mobileDropdown: false,
    tabsClasses: 'flex w-full',
    panelSpacing: 'mt-[72px] h-[calc(100%-72px)] overflow-auto',
  },
  fullScreen: {
    wrapperOuter: '',
    wrapperInner: '',
    container: 'flex-[100%] flex-shrink-0 flex-grow-0',
    mobileDropdown: true,
    tabsClasses: 'lg:flex w-full hidden',
    panelSpacing: 'mt-[33px] h-full overflow-auto',
  },
}

interface ITabsSelectVariants extends ISelectVariant, ITabInfoItem {}

const TabsInfo: React.FC<ITabsInfo> = ({
  tabs,
  spacing,
  sectionName,
  variant = 'halfScreen',
}) => {
  const spacingStyle =
    spacing === 'big' || variant === 'halfScreen'
      ? 'pt-[60px] dsk:pt-[90px]'
      : 'pt-[0px]'

  const styles = tabsStylesVariant[variant]

  const [openPanel, setOpenPanel] = useState<number>(0)
  const [openTab, setOpenTab] = useState<number | null>(null)
  const [imagePath, setImagePath] = useState<string | null>(null)

  const tabsWithIds = useMemo((): ITabsSelectVariants[] => {
    if (!tabs) return []
    return tabs.map((item, index) => {
      return {
        id: index.toString(),
        value: item.name,
        name: item.name,
        content: item.content,
      }
    })
  }, [tabs])

  const setImageByIndex = (
    byTab: boolean,
    tabIdx: number,
    itemIdx?: number
  ) => {
    if (tabs) {
      let img
      if (byTab) {
        img = tabs[tabIdx].image
      } else if (itemIdx) {
        img = tabs[tabIdx].content[itemIdx].image
      }
      if (img) setImagePath(img)
    }
  }

  useLayoutEffect(() => {
    if (tabs && tabs.length > 0) {
      if (tabs[0]?.image) {
        setImagePath(tabs[0]?.image)
      }
    }
  }, [tabs])

  return (
    <div
      className={`relative flex w-full flex-col items-center ${styles.wrapperOuter}`}
    >
      <div className={`flex-cols-2 container ${styles.wrapperInner}`}>
        <div className={`${styles.container} ${spacingStyle}`}>
          {tabs && styles.mobileDropdown && (
            <div className="lg:hidden">
              <Select
                value={
                  {
                    id: openPanel.toString(),
                    value: tabs[openPanel].name,
                  } as ISelectVariant
                }
                variant={'light'}
                variants={tabsWithIds}
                onChange={(val) => {
                  setOpenTab(null)
                  setOpenPanel(parseInt(val.id))
                }}
              />
            </div>
          )}
          <Tab.Group
            selectedIndex={openPanel}
            onChange={(val) => {
              setOpenTab(null)
              setOpenPanel(val)
            }}
          >
            <Tab.List className={`${styles.tabsClasses}`}>
              {tabsWithIds?.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    className="button1 ml-[-1px] h-[60px] flex-[33.3%] border-1 border-half-gray outline-0 ui-selected:bg-blue ui-not-selected:hover:opacity-90 md:h-[100px]"
                    onClick={() => {
                      if (variant === 'halfScreen') {
                        setImageByIndex(true, index)
                      }
                    }}
                  >
                    <span className="text-regular uppercase ui-selected:text-white">
                      {item.name}
                    </span>
                  </Tab>
                )
              })}
            </Tab.List>
            <div className="mt-[40px] lg:mt-[60px]">
              {sectionName && (
                <p className="text-section-title mb-[20px]">{sectionName}</p>
              )}
              {tabsWithIds.length > 0 && (
                <p className="title2">{tabsWithIds[openPanel].name}</p>
              )}
            </div>
            <Tab.Panels className={styles.panelSpacing}>
              {tabs?.map((item, idx) => {
                return (
                  <Tab.Panel key={idx}>
                    {item?.content?.map((cont, index) => {
                      const num =
                        index < 9 ? `[0${index + 1}]` : `[${index + 1}]`
                      return (
                        <div className="mb-[24px]" key={index}>
                          <Accordion
                            key={index}
                            name={cont.name}
                            text={cont.text}
                            link={cont.link}
                            number={num}
                            image={cont.image}
                            open={openTab === index}
                            onClick={() => {
                              setOpenTab(index)
                              if (variant === 'halfScreen') {
                                setImageByIndex(false, idx, index)
                              }
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
      {variant === 'halfScreen' && (
        <div className="flex-cols-2 relative -z-10 !hidden h-auto w-full dsk:absolute dsk:!flex dsk:h-full">
          <div className="flex-grow-1 flex-[100%] flex-shrink-0 dsk:flex-[50%]"></div>
          <div className="relative flex aspect-square flex-[100%] flex-grow-0 overflow-hidden dsk:aspect-auto dsk:flex-[50%]">
            {imagePath && (
              <ImageWithDomain
                className="object-cover object-center"
                src={imagePath}
                fill={true}
                alt={''}
              />
            )}
            {!imagePath && (
              <Image
                className="object-cover object-center"
                src={'/assets/main-image-1.png'}
                fill={true}
                alt={''}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TabsInfo
