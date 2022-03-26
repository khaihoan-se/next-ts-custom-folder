import '@/styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
        <Head>
          <link rel="shortcut icon" href="/bilibili_tv.ico" />
        </Head>
        <Component {...pageProps} />
    </React.Fragment>
  )
}
export default MyApp
