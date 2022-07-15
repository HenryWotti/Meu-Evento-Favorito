import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import '../styles/global.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>MEU EVENTO FAVORITO</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp