import React from 'react'
import { Dialog } from '@headlessui/react'
import { closeModal } from '../../../../redux/Actions/modalActions'
import { useAppDispatch } from '../../../../hooks/redux'
import { setIsAdult } from '../../../../redux/Actions/appActions'

const ModalAdult: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  const handleAdultConfirm = () => {
    localStorage.setItem('isAdult', 'true')
    setIsAdult(dispatch, true)
    handleCloseModal()
  }

  return (
    <Dialog.Panel className="relative flex min-h-[400px] w-full transform flex-col justify-center overflow-hidden bg-light-gray p-6 text-left align-middle shadow-xl transition-all">
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
        <p className="title5 text-center">
          Вы подтверждаете, <br /> что вам более <br /> 18 лет?
        </p>
        <p className="text-regular mt-[10px] text-center">
          Вы собираетесь просматривать фотографии, не предназначенные для лиц
          младше 18 лет.
        </p>
      </div>
      <div className="mt-[30px] flex justify-start gap-[10px]">
        <button
          onClick={handleCloseModal}
          className="text-regular flex h-[40px] flex-[100%] cursor-pointer items-center justify-center whitespace-nowrap bg-white pl-[15px] pr-[15px] uppercase transition-all hover:bg-hover-blue hover:text-white md:flex-[142px]"
        >
          Нет
        </button>
        <button
          onClick={handleAdultConfirm}
          className="text-regular flex h-[40px] flex-[100%] cursor-pointer items-center justify-center whitespace-nowrap bg-active-blue pl-[15px] pr-[15px] uppercase text-white transition-all hover:bg-hover-blue hover:text-white md:flex-[142px]"
        >
          Да
        </button>
      </div>
    </Dialog.Panel>
  )
}

export default ModalAdult
