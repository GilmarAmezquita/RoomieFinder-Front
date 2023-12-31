'use client'
import styles from './page.module.css'
import PageTemplate from './components/ui/PageTemplate'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  return (
    <PageTemplate>
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.information}>
            <Typography variant="h2" component="h1" gutterBottom align='left' color='black'>
              Find your perfect roommie
            </Typography>
            <Typography variant="h6" component="h5" gutterBottom align='left' color='black'>
              We are here to help you find your perfect roommie. We have a lot of roommies waiting for you to find them.
            </Typography>
            <Link href='/rooms'>
              <Button variant="contained" color="primary" size="large" style={{ marginTop: '2rem', borderRadius: 10 }}        >
                Get Started
              </Button>
            </Link>
          </section>
          <section className={styles.experiences}>

          </section>
        </main>
      </div>
    </PageTemplate>
  )
}
