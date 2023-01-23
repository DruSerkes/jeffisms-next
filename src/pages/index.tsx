import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import { Jeffism } from '@/types/types'
import { JeffismCard } from '@/components/JeffismCard/JeffismCard'
import { randomUUID } from 'crypto'
import { useJeffismContext } from '@/context/jeffismContext'
import { useEffect } from 'react'

export function getStaticProps() {
  const data = fs.readFileSync('src/jeffisms.csv', 'utf-8')
  const parsedData = parse(data, { trim: true, columns: false });
  const jeffisms = parsedData.slice(1).map((data: string[]) => {
    const [saying, definition, definition2, source] = data;
    const id = randomUUID();
    return { saying, source, definition, definition2, id };
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
  const { setJeffisms } = useJeffismContext();

  useEffect(() => {
    const jeffismContext = jeffisms.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
    setJeffisms(jeffismContext);
  }, []);

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
