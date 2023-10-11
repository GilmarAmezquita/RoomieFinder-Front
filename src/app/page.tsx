import Image from 'next/image'
import styles from './page.module.css'
import PageTemplate from './components/ui/PageTemplate'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <PageTemplate>
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.information}>
            <h1 className={styles.title}>
              Find your perfect roommie
            </h1>
            <h3 className={styles.subtitle}>Make MATCH with the best roomie</h3>
            <Button variant="contained" color="primary" size="large" style={{ marginTop: '2rem', borderRadius: 10 }}>
              Get Started
            </Button>
          </section>
          <section className={styles.experiences}>

          </section>
        </main>
      </div>
    </PageTemplate>
  )
}
