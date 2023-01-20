import { Nunito } from '@next/font/google'
import styles from '@/styles/Layout.module.css'
import Image from 'next/image'

const nunito = Nunito({ subsets: ['latin'] })

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src='/../public/jeffrey-d-serkes.jpeg'
            height={window.innerHeight}
            width={window.innerWidth / 4}
            alt="The Man, The Myth, The Legend"
          />
        </div>
        <div className={styles.right}>
          <header className={styles.header}>
            <h1 className={`${styles.h1} ${nunito.className}`}>Jeffisms</h1>
          </header>
          {children}
        </div>
      </main>
    </>
  )
};