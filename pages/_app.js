import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon API</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
