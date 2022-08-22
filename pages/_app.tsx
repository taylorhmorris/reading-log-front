import { useState } from 'react'
import { Context } from '../Context'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [context, setContext] = useState({ userId: 0, token: ''});

  return (
    <Context.Provider value={[ context, setContext ]}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
