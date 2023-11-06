'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReviewsItem } from '../../components/elements/static-blocks/ReviewsItem'
import { IModalFileinputError } from '../../components/elements/stateless-components/modal/ModalFileinputError'
import { IModalImage } from '../../components/elements/stateless-components/modal/ModalImage'

interface IOpenActionPayloadReview {
  type: 'review'
  content: IReviewsItem
}

interface IOpenActionPayloadReviewForm {
  type: 'review_form'
  content: null
}

interface IOpenActionPayloadAdult {
  type: 'adult'
  content: null
}

interface IOpenActionPayloadFileinputError {
  type: 'file_input_error'
  content: IModalFileinputError
}

interface IOpenActionPayloadImage {
  type: 'image'
  content: IModalImage
}

export type IOpenActionPayload =
  | IOpenActionPayloadReview
  | IOpenActionPayloadReviewForm
  | IOpenActionPayloadAdult
  | IOpenActionPayloadFileinputError
  | IOpenActionPayloadImage

export interface IModalSlice {
  open: boolean
  modal: IOpenActionPayload | null
}

const initialState: IModalSlice = {
  open: false,
  modal: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IOpenActionPayload>) {
      state.modal = action.payload
      state.open = true
    },
    closeModal(state) {
      state.open = false
      state.modal = null
    },
  },
})

export default modalSlice.reducer
