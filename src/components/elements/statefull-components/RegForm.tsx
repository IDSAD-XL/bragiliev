import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import ru from 'react-phone-input-2/lang/ru.json'
import DateTimePicker from 'react-datetime-picker'
import Link from 'next/link'
import { useFileinput } from '../../../hooks/useFileinput'
import FilesInputDragAndDrop from '../stateless-components/FilesInputDragAndDrop'
import { IRegFormDTO } from '../../../api/routes/send-form'
import { Api } from '../../../api/Api'
import { useAppDispatch } from '../../../hooks/redux'
import { openModal } from '../../../redux/Actions/modalActions'

export interface IRegForm {
  name: string
  title: string
  subtitle?: string
}

const RegForm: React.FC<IRegForm> = ({ name, title, subtitle }) => {
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const appDispatch = useAppDispatch()
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [dateValue, setDateValue] = useState<Date | string>(
    new Date(new Date().setHours(0, 0, 0, 0))
  )
  const { selectedFiles, handleFileChange, addFiles, removeFile, resetFiles } =
    useFileinput(['png', 'jpg', 'jpeg'], 5)

  const russianMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]

  useEffect(() => {
    setIsLoaded(true)
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <>
      <div className="absolute mt-[-50px]" id="reg_form" />
      <div className="flex w-full flex-col items-center bg-dark pb-[60px] pt-[60px] text-white md:pb-[90px] md:pt-[90px] dsk:justify-center">
        <div className="container">
          <p className="text-section-title">{name}</p>
          <p className="title2 mt-[20px]">{title}</p>
          <p
            className="text-regular mt-[10px] text-light-gray"
            dangerouslySetInnerHTML={{ __html: subtitle ?? '' }}
          />
          <Formik
            initialValues={
              {
                name: '',
                number: '',
                date: '',
                comment: '',
                files: [],
              } as IRegFormDTO
            }
            validate={(values) => {
              const errors = {} as {
                name: string
                number: string
                date: string
                comment: string
                files: []
              }
              values.date = dateValue.toString()
              if (!values.name) {
                errors.name = 'Обязательное поле'
              }
              if (!values.number) {
                errors.number = 'Обязательное поле'
              }
              if (!values.date) {
                errors.date = 'Выберите дату приема'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              values.date = dateValue.toString()
              openModal(appDispatch, {
                type: 'formSuccess',
                content: null,
              })
              try {
                await Api.postForm({
                  ...values,
                  files: selectedFiles,
                  url_source: currentUrl,
                })
              } catch (e) {
                console.log(e)
              }
              setSubmitting(false)
              resetForm()
              setDateValue('')
              resetFiles()
            }}
          >
            {({ values, touched, errors, isSubmitting, handleChange }) => (
              <Form className="form grid grid-cols-1 gap-x-[20px] lg:grid-cols-3">
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
                <div className="relative">
                  {loaded && (
                    <DateTimePicker
                      onChange={(e) => {
                        if (e) setDateValue(e)
                      }}
                      className={`input-text ${
                        errors.date && touched.date ? '!border-red' : ''
                      }`}
                      minDate={new Date(new Date().setHours(0, 0, 0, 0))}
                      maxDate={
                        new Date(
                          new Date().setFullYear(new Date().getFullYear() + 1)
                        )
                      }
                      formatMonthYear={(locale, date) => {
                        const month = date.getMonth()
                        const year = date.getFullYear()
                        return `${russianMonths[month]} ${year}`
                      }}
                      nextLabel={
                        <div className="flex justify-center">
                          <svg
                            width="7"
                            height="10"
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.816406 8.825L4.64141 5L0.816407 1.175L1.99974 3.41869e-07L6.99974 5L1.99974 10L0.816406 8.825Z"
                              fill="#848A95"
                            />
                          </svg>
                        </div>
                      }
                      prevLabel={
                        <div className="flex justify-center">
                          <svg
                            width="8"
                            height="10"
                            viewBox="0 0 8 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.17578 1.175L3.35078 5L7.17578 8.825L5.99245 10L0.992448 5L5.99245 0L7.17578 1.175Z"
                              fill="#848A95"
                            />
                          </svg>
                        </div>
                      }
                      calendarIcon={
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute right-0 top-[20px]"
                        >
                          <path
                            d="M9.65187 12.6875H6.73357C6.48575 12.6875 6.28516 12.8881 6.28516 13.1359V16.0542C6.28516 16.3017 6.48575 16.5026 6.73357 16.5026H9.65187C9.8997 16.5026 10.1003 16.3017 10.1003 16.0542V13.1359C10.1003 12.8884 9.8997 12.6875 9.65187 12.6875ZM9.20345 15.6058H7.18199V13.5843H9.20345V15.6058Z"
                            fill="white"
                          />
                          <path
                            d="M16.458 12.6875H13.5397C13.2919 12.6875 13.0913 12.8881 13.0913 13.1359V16.0542C13.0913 16.3017 13.2919 16.5026 13.5397 16.5026H16.458C16.7056 16.5026 16.9064 16.3017 16.9064 16.0542V13.1359C16.9064 12.8884 16.7056 12.6875 16.458 12.6875ZM16.0096 15.6058H13.9881V13.5843H16.0096V15.6058Z"
                            fill="white"
                          />
                          <path
                            d="M23.0547 12.6875H20.1364C19.8889 12.6875 19.688 12.8881 19.688 13.1359V16.0542C19.688 16.3017 19.8889 16.5026 20.1364 16.5026H23.0547C23.3022 16.5026 23.5031 16.3017 23.5031 16.0542V13.1359C23.5031 12.8884 23.3022 12.6875 23.0547 12.6875ZM22.6063 15.6058H20.5848V13.5843H22.6063V15.6058Z"
                            fill="white"
                          />
                          <path
                            d="M9.65187 19.3359H6.73357C6.48575 19.3359 6.28516 19.5368 6.28516 19.7844V22.7027C6.28516 22.9502 6.48575 23.1511 6.73357 23.1511H9.65187C9.8997 23.1511 10.1003 22.9502 10.1003 22.7027V19.7844C10.1003 19.5368 9.8997 19.3359 9.65187 19.3359ZM9.20345 22.2542H7.18199V20.2328H9.20345V22.2542Z"
                            fill="white"
                          />
                          <path
                            d="M16.458 19.3359H13.5397C13.2919 19.3359 13.0913 19.5368 13.0913 19.7844V22.7027C13.0913 22.9502 13.2919 23.1511 13.5397 23.1511H16.458C16.7056 23.1511 16.9064 22.9502 16.9064 22.7027V19.7844C16.9064 19.5368 16.7056 19.3359 16.458 19.3359ZM16.0096 22.2542H13.9881V20.2328H16.0096V22.2542Z"
                            fill="white"
                          />
                          <path
                            d="M23.0547 19.3359H20.1364C19.8889 19.3359 19.688 19.5368 19.688 19.7844V22.7027C19.688 22.9502 19.8889 23.1511 20.1364 23.1511H23.0547C23.3022 23.1511 23.5031 22.9502 23.5031 22.7027V19.7844C23.5031 19.5368 23.3022 19.3359 23.0547 19.3359ZM22.6063 22.2542H20.5848V20.2328H22.6063V22.2542Z"
                            fill="white"
                          />
                          <path
                            d="M26.606 4.00436H23.6444C23.6405 4.00436 23.6372 4.00526 23.6333 4.00556V3.40826C23.6333 2.43131 22.8387 1.63672 21.8617 1.63672C20.8848 1.63672 20.0902 2.43161 20.0902 3.40826V4.00436H16.7531V3.40826C16.7531 2.43131 15.9585 1.63672 14.9815 1.63672C14.0046 1.63672 13.21 2.43161 13.21 3.40826V4.00436H9.87257V3.40826C9.87257 2.43131 9.07797 1.63672 8.10102 1.63672C7.12407 1.63672 6.32948 2.43161 6.32948 3.40826V4.00466C6.32798 4.00466 6.32649 4.00436 6.32499 4.00436H3.36394C3.11612 4.00436 2.91553 4.20495 2.91553 4.45278V27.6945C2.91553 27.9421 3.11612 28.143 3.36394 28.143H26.606C26.8535 28.143 27.0544 27.9421 27.0544 27.6945V4.45278C27.0544 4.20495 26.8535 4.00436 26.606 4.00436ZM20.987 3.40826C20.987 2.92577 21.3793 2.53355 21.8617 2.53355C22.3442 2.53355 22.7365 2.92577 22.7365 3.40826V5.88263C22.7365 6.36483 22.3442 6.75734 21.8617 6.75734C21.3793 6.75734 20.987 6.36513 20.987 5.88263V3.40826ZM14.9815 2.53355C15.4637 2.53355 15.8562 2.92577 15.8562 3.40826V5.88263C15.8562 6.36483 15.464 6.75734 14.9815 6.75734C14.499 6.75734 14.1068 6.36513 14.1068 5.88263V4.49463C14.108 4.48058 14.111 4.46713 14.111 4.45248C14.111 4.43783 14.108 4.42438 14.1068 4.41033V3.40826C14.1068 2.92577 14.499 2.53355 14.9815 2.53355ZM7.22631 3.40826C7.22631 2.92577 7.61853 2.53355 8.10102 2.53355C8.58322 2.53355 8.97574 2.92577 8.97574 3.40826V5.88263C8.97574 6.36483 8.58352 6.75734 8.10102 6.75734C7.61853 6.75734 7.22631 6.36513 7.22631 5.88263V3.40826ZM26.1576 27.2461H3.81236V4.90119H6.32499C6.32649 4.90119 6.32798 4.9009 6.32948 4.9009V5.88293C6.32948 6.85988 7.12437 7.65448 8.10102 7.65448C9.07768 7.65448 9.87257 6.85988 9.87257 5.88293V4.90149H13.21V5.88293C13.21 6.85988 14.0049 7.65448 14.9815 7.65448C15.9582 7.65448 16.7531 6.85988 16.7531 5.88293V4.90149H20.0902V5.88293C20.0902 6.85988 20.8848 7.65448 21.8617 7.65448C22.8387 7.65448 23.6333 6.85988 23.6333 5.88293V4.9C23.6372 4.9 23.6405 4.90119 23.6444 4.90119H26.1576V27.2461Z"
                            fill="white"
                          />
                        </svg>
                      }
                      isClockOpen={false}
                      name="date"
                      value={dateValue}
                    />
                  )}
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="input-error"
                  />
                </div>
                <div className="mb-[40px] lg:col-span-3">
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
                <FilesInputDragAndDrop
                  selectedFiles={selectedFiles}
                  removeFile={removeFile}
                  addFiles={addFiles}
                />
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
        </div>
      </div>
    </>
  )
}

export default RegForm
