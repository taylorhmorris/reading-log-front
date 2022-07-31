import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Login from './Login'
import Signup from './Signup'

export default function Home({
  data
}: {
  data: {
    // types
  }
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reading Log</title>
        <meta name="description" content="Track your past, current, and future readings!" />
        <meta name="og:title" content="Reading Log" />
        <link rel="icon" href="/book-icon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>This is the header</h1>
      </header>

      <aside className={styles.aside}>
        This is the aside
      </aside>

      <main className={styles.main}>
        <Login />
        <Signup />
      </main>

      <footer className={styles.footer}>
        This is the footer
      </footer>
    </div>
  )
}