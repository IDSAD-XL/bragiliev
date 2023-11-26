import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { closeModal } from '../../../../redux/Actions/modalActions'
import ModalReview from './ModalReview'
import ModalReviewForm from './ModalReviewForm'
import { IOpenActionPayload } from '../../../../redux/Reducers/modalSlice'
import ModalAdult from './ModalAdult'
import ModalFileinputError from './ModalFileinputError'
import ModalImage from './ModalImage'
import ModalFormSuccess from './ModalFormSuccess'

const ModalDispatcher: React.FC = () => {
  const { open, modal } = useAppSelector((state) => state.modalSlice)
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  const modalContainerStyles: Record<
    NonNullable<IOpenActionPayload['type']>,
    string
  > = {
    review: 'min-h-[590px] max-w-[90%] dsk:w-[900px] dsk:max-w-[100%]',
    review_form: 'min-h-[700px] max-w-[90%] dsk:w-[1184px] dsk:max-w-[100%]',
    adult: 'min-h-[400px] max-w-[90%] dsk:w-[400px] dsk:max-w-[100%]',
    file_input_error:
      'min-h-[200px] max-w-[90%] dsk:w-[400px] dsk:max-w-[100%]',
    image:
      'min-h-[400px] h-[80vh] lg:h-[90vh] max-w-[90%] w-[90%] dsk:max-w-[1200px]',
    formSuccess: 'min-h-[250px] max-w-[90%] dsk:w-[400px] dsk:max-w-[100%]',
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-[#00000030] bg-opacity-25"
            onClick={handleCloseModal}
          />
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
              <div
                className={
                  modal?.type
                    ? modalContainerStyles[modal.type]
                    : modalContainerStyles.review
                }
              >
                {modal?.type === 'review' && modal && (
                  <ModalReview review={modal.content} />
                )}
                {modal?.type === 'review_form' && <ModalReviewForm />}
                {modal?.type === 'adult' && <ModalAdult />}
                {modal?.type === 'file_input_error' && (
                  <ModalFileinputError
                    errorType={modal.content.errorType}
                    file={modal.content.file}
                  />
                )}
                {modal?.type === 'image' && (
                  <ModalImage image={modal.content.image} />
                )}
                {modal?.type === 'formSuccess' && <ModalFormSuccess />}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalDispatcher
