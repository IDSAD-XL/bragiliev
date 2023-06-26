import React from 'react'
import { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { IResultsSlides } from './Results'

interface IResultsSlider {
  slides: IResultsSlides[] | null
}

const ResultsSlider: React.FC<IResultsSlider> = ({ slides }) => {
  return (
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
      {!!slides &&
        slides.map((res) => {
          return (
            <SwiperSlide key={res.id}>
              <p className="title5 !text-[30px]">{res.title}</p>
              <p className="text-light mt-[5px] !text-[14px] !leading-[22px] md:!text-[16px] dsk:!text-[14px]">
                {res.subtitle}
              </p>
              <div className="mt-[22px] flex w-full gap-[20px]">
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
      {!slides && <p className="text-medium text-white">Ничего не найдено</p>}
      <div className="relative mt-[42px] flex w-full items-center justify-between gap-[10px] dsk:gap-[30px]">
        <button className="swiper-custom-prev border-0 bg-none">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 17.5L1 9L9 0.5" stroke="white" strokeLinecap="round" />
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
            <path d="M1 18L9 9.5L1 1" stroke="white" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </Swiper>
  )
}

export default ResultsSlider
