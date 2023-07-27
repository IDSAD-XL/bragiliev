import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { closeModal } from '../../../../redux/Actions/modalActions'
import ModalReview from './ModalReview'

const ModalDispatcher: React.FC = () => {
  const { open, content, type } = useAppSelector((state) => state.modalSlice)
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
              <div>
                {type === 'review' && content && (
                  <ModalReview review={content} />
                )}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalDispatcher
