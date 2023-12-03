import React from 'react'
import { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IResultsSlide } from '../statefull-components/Results'
import ImageWithDomain from '../stateless-components/ImageWithDomain'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { openModal } from '../../../redux/Actions/modalActions'
import Link from 'next/link'

interface IResultsSlider {
  slides: IResultsSlide[] | null
}

const ResultsSlider: React.FC<IResultsSlider> = ({ slides }) => {
  const { isAdult } = useAppSelector((state) => state.appSlice)
  const dispatch = useAppDispatch()

  const handleClickOnAdultSlide = () => {
    openModal(dispatch, { type: 'adult', content: null })
  }

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
          const isAdultSlide = !isAdult && res.isAdult
          return (
            <SwiperSlide key={res.id}>
              <p className="text-light title5 mt-[5px] !text-[30px] !leading-[1.1em] md:!text-[16px] dsk:!text-[14px]">
                {res?.services?.[0] && (
                  <Link
                    rel="nofollow"
                    target="_blank"
                    className="underline underline-offset-4"
                    href={res.services[0].link}
                  >
                    {res.services[0].title}
                  </Link>
                )}
                {res?.services?.[1] && <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>}
                {res?.services?.[1] && (
                  <Link
                    rel="nofollow"
                    target="_blank"
                    className="underline underline-offset-4"
                    href={res.services[1].link}
                  >
                    {res.services[1].title}
                  </Link>
                )}
              </p>
              <div
                className="mt-[22px] flex w-full cursor-pointer gap-[20px]"
                onClick={() => {
                  if (isAdultSlide) {
                    handleClickOnAdultSlide()
                  }
                }}
              >
                <div
                  className={`relative flex flex-[100%] flex-grow-0 flex-wrap border-half-white md:flex-nowrap dsk:flex-[50%] ${
                    isAdultSlide ? '' : 'border-1'
                  }`}
                >
                  <div
                    className={`relative aspect-[300/332] flex-[100%] flex-grow-0 overflow-hidden border-half-white md:aspect-[1/1] md:h-full md:flex-[50%] md:border-b-0 ${
                      isAdultSlide ? '' : 'border-b-1 md:border-r-1'
                    }`}
                  >
                    <ImageWithDomain
                      className={`object-cover object-center ${
                        isAdultSlide ? 'blur-[20px]' : ''
                      }`}
                      src={res.images.before1}
                      alt=""
                      fill={true}
                    />
                  </div>
                  <div className="relative aspect-[1/1] flex-[100%] flex-grow-0 overflow-hidden md:h-full md:flex-[50%]">
                    <ImageWithDomain
                      className={`object-cover object-center ${
                        isAdultSlide ? 'blur-[20px]' : ''
                      }`}
                      src={res.images.after1}
                      alt=""
                      fill={true}
                    />
                  </div>
                  {isAdultSlide && (
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                      <div className="relative h-[350px] w-[350px]">
                        <Image src="/assets/is18.svg" fill={true} alt={''} />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`relative hidden flex-[50%] flex-grow-0 overflow-hidden border-half-white dsk:flex ${
                    isAdultSlide ? '' : 'border-1'
                  }`}
                >
                  <div
                    className={`relative h-full flex-[50%] flex-grow-0 border-half-white ${
                      isAdultSlide ? '' : 'border-b-1 md:border-r-1'
                    }`}
                  >
                    <ImageWithDomain
                      className={`object-cover object-center ${
                        isAdultSlide ? 'blur-[20px]' : ''
                      }`}
                      src={res.images.before2}
                      alt=""
                      fill={true}
                    />
                  </div>
                  <div className="relative h-full flex-[50%] flex-grow-0 overflow-hidden">
                    <ImageWithDomain
                      className={`object-cover object-center ${
                        isAdultSlide ? 'blur-[20px]' : ''
                      }`}
                      src={res.images.after2}
                      alt=""
                      fill={true}
                    />
                  </div>
                  {isAdultSlide && (
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                      <div className="relative h-[350px] w-[350px]">
                        <Image src="/assets/is18.svg" fill={true} alt={''} />
                      </div>
                    </div>
                  )}
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
