import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enoch Chirima</title>
        <link rel="icon" href="/myicon..png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
