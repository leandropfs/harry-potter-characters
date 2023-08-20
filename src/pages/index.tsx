import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RenderOnClient from '@/components/RenderOnClient'
import Characters from '@/components/Characters'

import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Harry Potter and Other Charactres</title>
        <meta name="description" content="Harry Potter and Others Charactres" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
      </Head>
      <Header />
      <main className={styles.main}>
        <RenderOnClient>
          <Characters />
        </RenderOnClient>
      </main>
      <Footer />
    </>
  )
}
