import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { closeMenu, openMenu } from '../../redux/Actions/appActions'

const Burger: React.FC = () => {
  const { menuOpen } = useAppSelector((state) => state.appSlice)
  const dispatch = useAppDispatch()
  function toggleMenu(): void {
    if (menuOpen) {
      dispatch(closeMenu)
    } else {
      dispatch(openMenu)
    }
  }

  return (
    <div
      onClick={toggleMenu}
      className={`burger ${menuOpen ? 'open' : 'closed'}`}
    >
      <span />
      <span />
    </div>
  )
}

export default Burger
