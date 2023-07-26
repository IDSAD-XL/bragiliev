import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { closeModal } from '../../../redux/Actions/modalActions'
import Image from 'next/image'
import Link from 'next/link'

const Modal: React.FC = () => {
  const { open } = useAppSelector((state) => state.modalSlice)
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#00000030] bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center pt-[60px] text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex min-h-[590px] w-full max-w-[90%] transform flex-col justify-center overflow-hidden bg-light-gray p-6 text-left align-middle shadow-xl transition-all dsk:w-[900px]">
                <Dialog.Title
                  as="h3"
                  className="absolute left-0 top-0 flex w-full justify-end"
                >
                  <svg
                    className="mr-[30px] mt-[30px] cursor-pointer"
                    onClick={handleCloseModal}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M0.703529 20.1869L19.6988 0.90123L18.9953 0.186945L0 19.4727L0.703529 20.1869Z"
                      fill="#10100E"
                    />
                    <path
                      d="M19.2965 20.1869L0.301179 0.90123L1.00471 0.186945L20 19.4727L19.2965 20.1869Z"
                      fill="#10100E"
                    />
                  </svg>
                </Dialog.Title>
                <div>
                  <p className="text-section-title">[ 01/12/22 ]</p>
                  <p className="title5">Анастасия Макеева</p>
                  <p className="text-regular">
                    Мне все понравилось, все безупречно. Только положительные
                    отзывы, Приём состоялся вовремя, задержек не было.
                    Специалиста я выбирал по отзывам на сайте СберЗдоровье,
                    по рейтингу. Мне все понравилось, все безупречно. Только
                    положительные отзывы, Приём состоялся вовремя, задержек
                    не было. Специалиста я выбирал по отзывам на сайте
                    СберЗдоровье, по рейтингу. Мне все понравилось,
                    все безупречно. Только положительные отзывы, Приём состоялся
                    вовремя, задержек не было. Специалиста я выбирал по отзывам
                    на сайте СберЗдоровье, по рейтингу.
                  </p>
                </div>
                <div className="mt-[30px] flex flex-wrap justify-start gap-[10px] md:flex-nowrap">
                  <button
                    onClick={handleCloseModal}
                    className="text-regular flex h-[40px] flex-[100%] !flex-grow-0 cursor-pointer items-center justify-center whitespace-nowrap bg-white pl-[15px] pr-[15px] uppercase transition-all group-hover:bg-hover-blue group-hover:text-white md:flex-[142px]"
                  >
                    Скрыть
                  </button>
                  <Link
                    href={'#'}
                    className="relative box-border flex h-[40px] flex-[100%] !flex-grow-0 justify-center border-1 border-white bg-white transition-all group-hover:border-[#cdcdcd] md:flex-[142px]"
                  >
                    <Image
                      src={'/assets/review-icon.png'}
                      fill={true}
                      alt=""
                      className="!relative max-w-[142px] object-cover object-center"
                    />
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
