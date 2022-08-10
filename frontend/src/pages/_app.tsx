import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import '../styles/global.scss'
import Head from 'next/head'

{ /* Chama as os .tsx para compor as páginas */ }
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