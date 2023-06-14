import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '../src/styles/globals.css'
import '../src/styles/general.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('loaded')
  }, [])
  return <Component {...pageProps} />
}

export default App
