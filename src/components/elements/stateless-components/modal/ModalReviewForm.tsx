import React from 'react'
import { useFileinput } from '../../../../hooks/useFileinput'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import PhoneInput from 'react-phone-input-2'
import FilesInputDragAndDrop from '../FilesInputDragAndDrop'
import Link from 'next/link'
import ru from 'react-phone-input-2/lang/ru.json'
import { Dialog } from '@headlessui/react'
import { useAppDispatch } from '../../../../hooks/redux'
import { closeModal } from '../../../../redux/Actions/modalActions'

const ModalReviewForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    dispatch(closeModal)
  }

  const { selectedFiles, handleFileChange, addFiles, removeFile, resetFiles } =
    useFileinput()

  return (
    <Dialog.Panel className="flex-grow-1 flex min-h-[700px] flex-col items-start justify-center bg-dark p-[30px] text-white dsk:pl-[170px] dsk:pr-[170px]">
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
            fill="#FFFFFF"
          />
          <path
            d="M19.2965 20.1869L0.301179 0.90123L1.00471 0.186945L20 19.4727L19.2965 20.1869Z"
            fill="#FFFFFF"
          />
        </svg>
      </Dialog.Title>
      <p className="text-section-title">[ обратная связь ]</p>
      <p className="title2 mt-[20px]">Оставить отзыв</p>
      <p
        className="text-regular mt-[10px] text-light-gray"
        dangerouslySetInnerHTML={{
          __html:
            'Обратите внимание, что все отзывы проходят модерацию в течение 10 рабочих дней' ??
            '',
        }}
      />
      <Formik
        initialValues={{
          name: '',
          number: '',
          comment: '',
          files: [],
        }}
        validate={(values) => {
          const errors = {} as {
            name: string
            number: string
            comment: string
            files: []
          }
          if (!values.name) {
            errors.name = 'Обязательное поле'
          }
          if (!values.number) {
            errors.number = 'Обязательное поле'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData()
          formData.append('name', values.name)
          formData.append('phone', values.number)
          formData.append('comment', values.comment)
          for (let i = 0; i <= selectedFiles.length; i++) {
            if (selectedFiles[i]) {
              formData.append(`files[${i}]`, selectedFiles[i].file)
            }
          }
          setSubmitting(false)
          resetForm()
          resetFiles()
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange }) => (
          <Form className="form grid w-full grid-cols-1 gap-x-[20px] lg:grid-cols-2">
            <div className="relative">
              <Field
                placeholder="ФИО"
                type="text"
                name="name"
                className={`input-text ${
                  errors.name && touched.name ? '!border-red' : ''
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="input-error"
              />
            </div>
            <div className="input-phone-wrapper relative mt-[30px]">
              <PhoneInput
                inputClass={`input-text font-['Raleway'] ${
                  errors.number && touched.number ? '!border-red' : ''
                }`}
                containerClass="input-phone-wrapper"
                country={'ru'}
                localization={ru}
                preferredCountries={['kz', 'ru', 'us', 'by']}
                value={values.number}
                inputProps={{
                  name: 'number',
                  onChange: handleChange,
                }}
              />
              <ErrorMessage
                name="number"
                component="div"
                className="input-error"
              />
            </div>
            <div className="mb-[40px] lg:col-span-2">
              <Field
                placeholder="Комментарий"
                type="text"
                name="comment"
                className="input-text max-h-[300px] min-h-[60px]"
                as={'textarea'}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="input-error"
              />
            </div>
            {selectedFiles.length > 0 && (
              <FilesInputDragAndDrop
                selectedFiles={selectedFiles}
                removeFile={removeFile}
                addFiles={addFiles}
              />
            )}
            {selectedFiles.length === 0 && (
              <div className="mt-[30px] flex gap-[14px] md:pr-[10px] lg:col-span-1 lg:justify-end xl:pr-[30px]">
                <div className="pt-[3px]">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4 8.36012C7.6 8.15955 7.6 7.7584 7.4 7.55782C7.2 7.35725 6.8 7.35725 6.5 7.55782L3.2 10.767C2.6 11.2685 2.3 11.9705 2.3 12.7728C2.3 13.5751 2.6 14.2771 3.2 14.7785C4.4 15.8817 6.2 15.8817 7.4 14.7785L14.8 7.55782C15.6 6.75552 16 5.75265 16 4.74978C16 3.64661 15.6 2.74403 14.8 1.94173C13.2 0.337132 10.6 0.337132 9 1.94173L1.5 9.06213C0.5 10.065 0 11.2685 0 12.6725C0 14.0765 0.5 15.2799 1.5 16.2828C2.5 17.2857 3.8 17.7871 5.2 17.7871C6.6 17.7871 8 17.2857 8.9 16.2828L12.2 13.0736C12.4 12.8731 12.4 12.4719 12.2 12.2713C12 12.0708 11.6 12.0708 11.3 12.2713L8 15.4805C7.2 16.1825 6.2 16.5837 5.1 16.5837C4 16.5837 3 16.1825 2.2 15.3802C1.4 14.6782 1 13.6753 1 12.6725C1 11.6696 1.4 10.6667 2.2 9.96472L9.9 2.74403C10.4 2.24259 11.2 1.94173 11.9 1.94173C12.7 1.94173 13.4 2.24259 13.9 2.74403C14.4 3.24547 14.7 3.94748 14.7 4.64949C14.7 5.3515 14.4 6.05351 13.9 6.55495L6.5 13.7756C5.8 14.3774 4.8 14.3774 4.1 13.7756C3.8 13.4748 3.6 13.0736 3.6 12.5722C3.6 12.171 3.8 11.7699 4.1 11.3687L7.4 8.36012Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="lg:col-span-1">
                  <div>
                    <label
                      className="text-regular link-underlined inline-block h-[22px] uppercase"
                      htmlFor="form-file"
                    >
                      Добавить фото
                    </label>
                    <input
                      type="file"
                      name="files"
                      multiple
                      className="absolute h-[1px] w-[1px] opacity-0 "
                      id="form-file"
                      accept="image/png, image/jpg, image/jpeg"
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="text-light mt-[5px] text-light-gray">
                    Формат фото png, jpg, jpeg, размером до 5 Мб
                  </p>
                </div>
              </div>
            )}
            <div className="mt-[30px]">
              <button
                className="button1 flex h-[80px] w-full items-center justify-center"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="link-plus after:opacity-0">Отправить</span>
              </button>
              <p className="text-light mt-[10px] text-center text-light-gray">
                Нажимая на кнопку «Отправить», даю согласие на обработку
                персональных <br /> данных и соглашаюсь c{' '}
                <Link href="/" className="underline decoration-dashed">
                  политикой конфиденциальности
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </Dialog.Panel>
  )
}

export default ModalReviewForm
