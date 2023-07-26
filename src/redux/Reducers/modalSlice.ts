'use client'
import { createSlice } from '@reduxjs/toolkit'

interface IModalSlice {
  open: boolean
}

const initialState: IModalSlice = {
  open: false,
}

export const modalSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openModal(state) {
      state.open = true
    },
    closeModal(state) {
      state.open = false
    },
  },
})

export default modalSlice.reducer
