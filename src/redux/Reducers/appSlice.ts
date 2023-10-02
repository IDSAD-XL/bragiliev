'use client'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IAppState {
  menuOpen: boolean
  isAdult: boolean
}

const initialState: IAppState = {
  menuOpen: false,
  isAdult: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true
    },
    closeMenu(state) {
      state.menuOpen = false
    },
    setIsAdult(state, action: PayloadAction<boolean>) {
      state.isAdult = action.payload
    }
  },
})

export default appSlice.reducer
