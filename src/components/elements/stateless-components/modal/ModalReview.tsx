import React from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { closeModal } from '../../../../redux/Actions/modalActions'
import { useAppDispatch } from '../../../../hooks/redux'
import { IReviewsItem } from '../../static-blocks/ReviewsItem'

interface IModalReview {
  review: IReviewsItem
}

const ModalReview: React.FC<IModalReview> = ({ review }) => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  return (
    <Dialog.Panel className="relative flex min-h-[590px] w-full transform flex-col justify-center overflow-hidden bg-light-gray p-6 text-left align-middle shadow-xl transition-all">
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
        <p
          className="text-section-title"
          dangerouslySetInnerHTML={{ __html: review.date }}
        ></p>
        <p
          className="title5"
          dangerouslySetInnerHTML={{ __html: review.name }}
        ></p>
        <p
          className="text-regular"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </div>
      <div className="mt-[30px] flex flex-wrap justify-start gap-[10px] md:flex-nowrap">
        <button
          onClick={handleCloseModal}
          className="text-regular flex h-[40px] flex-[100%] !flex-grow-0 cursor-pointer items-center justify-center whitespace-nowrap bg-white pl-[15px] pr-[15px] uppercase transition-all hover:bg-hover-blue hover:text-white md:flex-[142px]"
        >
          Скрыть
        </button>
        <Link
          href={review.link}
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
  )
}

export default ModalReview
