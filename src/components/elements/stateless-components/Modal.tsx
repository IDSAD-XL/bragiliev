import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { closeModal } from '../../../redux/Actions/modalActions'

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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[90%] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all dsk:w-[900px]">
                <Dialog.Title as="h3" className="flex justify-end">
                  <svg
                    className="cursor-pointer"
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

                <div className="mt-4">
                  <button
                    type="button"
                    className="bg-blue-100 hover:bg-blue-200 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleCloseModal}
                  >
                    Got it, thanks!
                  </button>
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
