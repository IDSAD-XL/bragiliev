'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReviewsItem } from '../../components/elements/static-blocks/ReviewsItem'

export interface IModalSlice {
  open: boolean
  type: 'review' | 'review_form' | null
  content?: IReviewsItem | null
}

const initialState: IModalSlice = {
  open: false,
  type: null,
  content: null,
}

interface IOpenActionPayloadBase {
  type: IModalSlice['type']
}

interface IOpenActionPayloadReview extends IOpenActionPayloadBase {
  type: 'review'
  content: IReviewsItem
}

interface IOpenActionPayloadReviewForm extends IOpenActionPayloadBase {
  type: 'review_form'
}

export type IOpenActionPayload =
  | IOpenActionPayloadReview
  | IOpenActionPayloadReviewForm

export const modalSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IOpenActionPayload>) {
      state.type = action.payload.type
      if (action.payload.type === 'review') {
        state.content = action.payload.content
      } else {
        state.content = null
      }
      state.open = true
    },
    closeModal(state) {
      state.type = null
      state.open = false
      state.content = null
    },
  },
})

export default modalSlice.reducer
