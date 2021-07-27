import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import 'reseter.css'
import '@styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
