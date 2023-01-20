import { Nunito } from '@next/font/google'
import styles from '@/styles/Layout.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

export default function Layout({ children }: React.PropsWithChildren) {
  const [image, setImage] = useState({ height: 800, width: 300 })
  useEffect(() => {
    if (!window) return;
    const width = window.innerWidth / 4;
    const height = window.innerHeight;
    setImage({ width, height })
  }, [window])

  return (
    <>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src='/../public/jeffrey-d-serkes.jpeg'
            height={image.height}
            width={image.width}
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