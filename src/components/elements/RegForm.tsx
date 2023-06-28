import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import 'react-phone-input-2/lib/style.css'
import ru from 'react-phone-input-2/lang/ru.json'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'

export interface IRegForm {
  name: string
  title: string
  subtitle?: string
}

const RegForm: React.FC<IRegForm> = ({ name, title, subtitle }) => {
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [dateValue, onChangeDateValue] = useState<Date | string>(
    new Date(new Date().setHours(0, 0, 0, 0))
  )

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
  }, [])

  return (
    <div className="flex w-full flex-col items-center bg-dark pb-[60px] pt-[60px] text-white md:pb-[90px] md:pt-[90px] dsk:justify-center">
      <div className="container">
        <p className="text-section-title">{name}</p>
        <p className="title2 mt-[20px]">{title}</p>
        <p
          className="text-regular mt-[10px] text-light-gray"
          dangerouslySetInnerHTML={{ __html: subtitle ?? '' }}
        />
        <Formik
          initialValues={{ name: '', number: '', date: '', comment: '' }}
          validate={(values) => {
            const errors = {} as {
              name: string
              number: string
              date: string
              comment: string
            }
            values.date = dateValue.toString()
            if (!values.name) {
              errors.name = 'Обязательное поле'
            }
            if (!values.number) {
              errors.number = 'Обязательное поле'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              values.date = dateValue.toString()
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ values, isSubmitting, handleChange }) => (
            <Form className="form grid grid-cols-3 gap-[20px]">
              <div>
                <Field
                  placeholder="ФИО"
                  type="text"
                  name="name"
                  className="input-text"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="input-error"
                />
              </div>
              <div className="input-phone-wrapper">
                <PhoneInput
                  inputClass="input-text font-['Raleway']"
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
                      if (e) onChangeDateValue(e)
                    }}
                    className="input-text"
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
              <div className="col-span-3">
                <Field
                  placeholder="Комментарий"
                  type="text"
                  name="comment"
                  className="input-text"
                  as={'textarea'}
                  maxHeight={'200px'}
                  minHeight={'60px'}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className="input-error"
                />
              </div>
              <div></div>
              <div>Добавить фото</div>
              <div>
                <button
                  className="button1 flex h-[80px] w-full items-center justify-center"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegForm
