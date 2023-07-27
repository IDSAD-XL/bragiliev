import { IOpenActionPayload, modalSlice } from '../Reducers/modalSlice'
import { type AppDispatch } from '../store'

const openModal = (dispatch: AppDispatch, payload: IOpenActionPayload) => {
  dispatch(modalSlice.actions.openModal(payload))
}

const closeModal = (dispatch: AppDispatch) => {
  dispatch(modalSlice.actions.closeModal())
}

export { openModal, closeModal }
