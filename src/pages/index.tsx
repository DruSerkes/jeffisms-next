import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'



export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Jeffisms</title>
          <meta name="description" content="Wisdom, or whatever, by Jeff!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <p>Jeffism Here</p>
        </main>
      </Layout>
    </>
  )
}
