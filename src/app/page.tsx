import Image from 'next/image'
import styles from './page.module.css'
import PageTemplate from './components/ui/PageTemplate'

export default function Home() {
  return (
    <PageTemplate>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </h1>
        </main>
      </div>
    </PageTemplate>
  )
}
