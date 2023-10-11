import React from 'react'
import { Dialog } from '@headlessui/react'
import { closeModal } from '../../../../redux/Actions/modalActions'
import { useAppDispatch } from '../../../../hooks/redux'

export interface IModalFileinputError {
  errorType: 'wrong_extension' | 'file_is_too_big'
  file: {
    filename: string
    size: number
  }
}

const ModalFileinputerror: React.FC<IModalFileinputError> = ({
  errorType,
  file,
}) => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  return (
    <Dialog.Panel className="relative flex min-h-[250px] w-full transform flex-col justify-center overflow-hidden bg-light-gray p-6 text-left align-middle shadow-xl transition-all">
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
        {errorType === 'wrong_extension' && (
          <div>
            Неподходящее расширение файла: <br />
            <b>{file.filename}</b>
          </div>
        )}
        {errorType === 'file_is_too_big' && (
          <div>
            Файл слишком большой: <br />
            <b>{file.filename}</b>
          </div>
        )}
      </div>
      <div className="mt-[30px] flex flex-wrap justify-start gap-[10px] md:flex-nowrap">
        <button
          onClick={handleCloseModal}
          className="text-regular flex h-[40px] flex-[100%] !flex-grow-0 cursor-pointer items-center justify-center whitespace-nowrap bg-white pl-[15px] pr-[15px] uppercase transition-all hover:bg-hover-blue hover:text-white md:flex-[142px]"
        >
          Скрыть
        </button>
      </div>
    </Dialog.Panel>
  )
}

export default ModalFileinputerror
