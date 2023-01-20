import { Nunito } from '@next/font/google'
import styles from '@/styles/Layout.module.css'
const nunito = Nunito({ subsets: ['latin'] })

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.left} />
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