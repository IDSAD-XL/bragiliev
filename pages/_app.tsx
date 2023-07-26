import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '../src/styles/globals.css'
import '../src/styles/general.scss'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import Modal from '../src/components/elements/stateless-components/Modal'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('loaded')
  }, [])
  return (
    <Provider store={store}>
      <Modal />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
