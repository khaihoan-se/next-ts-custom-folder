import Header from '@/components/partials/Header'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Bilibili</title>
         </Head>
         <Header />
      </>
   )
}

export default Home
