'use client'
import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  menuOpen: boolean
}

const initialState: IAppState = {
  menuOpen: false,
}

export const appSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true
    },
    closeMenu(state) {
      state.menuOpen = false
    },
  },
})

export default appSlice.reducer
