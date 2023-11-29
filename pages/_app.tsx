import type { AppProps } from 'next/app'
import React from 'react'
import '../src/styles/general.scss'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import ModalDispatcher from '../src/components/elements/stateless-components/modal/ModalDispatcher'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ModalDispatcher />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
