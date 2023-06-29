import React from 'react'

const Texts = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1>Заголовок 1</h1>
      <h2>Заголовок 2</h2>
      <h3>Заголовок 3</h3>
      <h4>Заголовок 4</h4>
      <h5>Заголовок 5</h5>
      <p className="text-medium">Текст медиум</p>
      <p className="text-regular">Текст обычный</p>
      <p className="text-light">Текст мелкий</p>
      <p className="text-regular uppercase">Текст обычный, но uppercase</p>
    </React.Fragment>
  )
}

export default Texts
