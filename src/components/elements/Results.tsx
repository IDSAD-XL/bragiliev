import React, { useCallback, useEffect, useState } from 'react'
import Select, {
  ISelectContent,
  ISelectVariant,
  ISelectVariantDependence,
} from './Select'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

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
}

export interface IResults extends IResultsContent {}

const Results: React.FC<IResults> = ({
  name,
  title,
  selects = [],
  results,
}) => {
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
      <div className="container pb-[60px] pt-[60px] md:pb-[90px] dsk:pb-[120px] dsk:pt-[90px]">
        <p className="text-section-title">{name}</p>
        <p className="title2 mt-[20px]">{title}</p>
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
              <span className="link-plus no-underline">Все кейсы</span>
            </div>
          </div>
        </div>
        <div className="mt-[30px] dsk:mt-[27px]">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Scrollbar]}
            spaceBetween={50}
            navigation={{
              prevEl: '.swiper-custom-prev',
              nextEl: '.swiper-custom-next',
            }}
            scrollbar={{ el: '.swiper-custom-scrollbar', draggable: true }}
          >
            {!!filteredResults &&
              filteredResults.map((res) => {
                return (
                  <SwiperSlide key={res.id}>
                    <p className="title5 !text-[30px]">{res.title}</p>
                    <p className="text-light mt-[5px] !text-[14px] !leading-[22px] md:!text-[16px] dsk:!text-[14px]">
                      {res.subtitle}
                    </p>
                    <div className="mt-[22px] flex min-h-[450px] w-full gap-[20px]">
                      <div className="flex flex-[100%] flex-grow-0 flex-wrap border-1 border-half-white md:flex-nowrap dsk:flex-[50%]">
                        <div className="relative aspect-[300/332] flex-[100%] flex-grow-0 border-b-1 border-half-white md:aspect-[314/459] md:h-full md:flex-[50%] md:border-b-0 md:border-r-1">
                          <Image
                            className="object-cover object-center"
                            src={res.images.before1}
                            alt=""
                            fill={true}
                          />
                        </div>
                        <div className="relative aspect-[300/332] flex-[100%] flex-grow-0 md:aspect-[314/459] md:h-full md:flex-[50%]">
                          <Image
                            className="object-cover object-center"
                            src={res.images.after1}
                            alt=""
                            fill={true}
                          />
                        </div>
                      </div>
                      <div className="hidden flex-[50%] flex-grow-0 border-1 border-half-white dsk:flex">
                        <div className="relative h-full flex-[50%] flex-grow-0 border-r-1 border-half-white">
                          <Image
                            className="object-cover object-center"
                            src={res.images.before2}
                            alt=""
                            fill={true}
                          />
                        </div>
                        <div className="relative h-full flex-[50%] flex-grow-0">
                          <Image
                            className="object-cover object-center"
                            src={res.images.after2}
                            alt=""
                            fill={true}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            {!filteredResults && (
              <p className="text-medium text-white">Ничего не найдено</p>
            )}
            <div className="relative mt-[42px] flex w-full items-center justify-between gap-[10px] dsk:gap-[30px]">
              <button className="swiper-custom-prev border-0 bg-none">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17.5L1 9L9 0.5"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="swiper-scrollbar swiper-custom-scrollbar"></div>
              <button className="swiper-custom-next border-0 bg-none">
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 18L9 9.5L1 1"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-[30px] flex justify-center md:mt-[60px]">
              <div className="block dsk:hidden">
                <div className="button1 flex h-[60px] w-[300px] items-center justify-center md:h-[80px]">
                  <span className="link-plus no-underline">Все кейсы</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Results
