import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { parse } from 'csv-parse'
import fs from 'fs'
import { Jeffism } from '@/types/types'



export async function getStaticProps() {
  // let jeffisms: Jeffism[] = []
  const data = fs.readFileSync('src/jeffisms.csv', 'utf-8')
  const jeffisms = parse(data, { trim: true, columns: false }, (err, rows: string[][]) => {
    if (err) throw err;

    return rows.slice(1).map(row => {
      const [saying, definition, definition2, source] = row;
      return {
        saying,
        definition,
        definition2,
        source
      }
    })
  })

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
          {jeffisms.map(jeffism => (
            <div className={styles.card}>
              <h2>"{jeffism.saying}"</h2>
              <p> - {jeffism.source}</p>
              <span><b>Definition:</b> {jeffism.definition}</span>
              {jeffism.definition2 && <span><b>Alt Definition:</b> {jeffism.definition2}</span>}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
