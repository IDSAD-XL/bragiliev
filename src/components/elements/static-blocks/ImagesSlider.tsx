import React from 'react'
import { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImageWithDomain from '../stateless-components/ImageWithDomain'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export interface IImagesSlider {
  slides: string[]
}

const ImagesSlider: React.FC<IImagesSlider> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      modules={[Navigation, Scrollbar]}
      spaceBetween={50}
      navigation={{
        prevEl: '.swiper-custom-prev',
        nextEl: '.swiper-custom-next',
      }}
      className=""
      scrollbar={{ el: '.swiper-custom-scrollbar-dark', draggable: true }}
    >
      {!!slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index} className="aspect-[3/4] !w-[300px]">
            <ImageWithDomain src={slide} alt={''} fill={true} />
          </SwiperSlide>
        ))}
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
              stroke="#000000"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="swiper-scrollbar swiper-custom-scrollbar-dark"></div>
        <button className="swiper-custom-next border-0 bg-none">
          <svg
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 18L9 9.5L1 1" stroke="#000000" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </Swiper>
  )
}

export default ImagesSlider
