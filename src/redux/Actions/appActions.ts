import { appSlice } from '../Reducers/appSlice'
import { type AppDispatch } from '../store'

const openMenu = (dispatch: AppDispatch) => {
  dispatch(appSlice.actions.openMenu())
}

const closeMenu = (dispatch: AppDispatch) => {
  dispatch(appSlice.actions.closeMenu())
}

export { openMenu, closeMenu }
