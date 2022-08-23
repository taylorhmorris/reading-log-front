import { useState } from 'react'
import { Context } from '../Context'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

type ContextType = {
  userId?: number
}

function MyApp({ Component, pageProps }: AppProps) {
  const [context, setContext] = useState<ContextType>({});

  return (
    <Context.Provider value={[ context, setContext ]}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
