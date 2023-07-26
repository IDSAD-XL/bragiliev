import { modalSlice } from '../Reducers/modalSlice'
import { type AppDispatch } from '../store'

const openModal = (dispatch: AppDispatch) => {
  dispatch(modalSlice.actions.openModal())
}

const closeModal = (dispatch: AppDispatch) => {
  dispatch(modalSlice.actions.closeModal())
}

export { openModal, closeModal }
