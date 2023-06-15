import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '../src/styles/globals.css'
import '../src/styles/general.scss'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('loaded')
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
