import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import { Jeffism } from '@/types/types'
import { JeffismCard } from '@/components/JeffismCard/JeffismCard'



export function getStaticProps() {
  const data = fs.readFileSync('src/jeffisms.csv', 'utf-8')
  const parsedData = parse(data, { trim: true, columns: false });
  const jeffisms = parsedData.slice(1).map((data: string[]) => {
    const [saying, source, definition, definition2] = data;
    return { saying, source, definition, definition2 };
  })
  console.log({ jeffisms })
  return {
    props: {
      jeffisms
    }
  }
}

interface Props {
  jeffisms: Jeffism[];
}

export default function Home({ jeffisms }: Props) {
  return (
    <Layout>
      <Head>
        <title>Jeffisms</title>
        <meta name="description" content="Wisdom, or whatever, by Jeff!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {jeffisms.map(jeffism => <JeffismCard key={jeffism.saying} jeffism={jeffism} />)}
        </div>
      </main>
    </Layout>
  )
}
