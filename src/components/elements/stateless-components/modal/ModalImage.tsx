import React from 'react'
import { Dialog } from '@headlessui/react'
import { closeModal } from '../../../../redux/Actions/modalActions'
import { useAppDispatch } from '../../../../hooks/redux'
import ImageWithDomain from '../ImageWithDomain'

export interface IModalImage {
  image: string
}

const ModalImage: React.FC<IModalImage> = ({ image }) => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  return (
    <Dialog.Panel className="relative flex h-full min-h-[400px] w-full transform flex-col justify-center overflow-hidden bg-light-gray p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h3"
        className="absolute left-0 top-0 flex w-full justify-end"
      >
        <svg
          className="z-10 mr-[30px] mt-[30px] cursor-pointer"
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
      <div className="relative w-full grow">
        <ImageWithDomain
          src={image}
          fill={true}
          alt={''}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </Dialog.Panel>
  )
}

export default ModalImage
