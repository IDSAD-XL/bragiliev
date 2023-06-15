import React from 'react'

const Burger: React.FC = () => {
  const open = false
  return (
    <div className={`burger ${open ? 'open' : 'closed'}`}>
      <span />
      <span />
    </div>
  )
}

export default Burger
