import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Signup from './Signup'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reading Log</title>
        <meta name="description" content="Track your past, current, and future readings!" />
        <meta name="og:title" content="Reading Log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>This is the header</h1>
      </header>

      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <main className={styles.main}>
        {/* <Dashboard /> */}
        <Signup />
      </main>

      <footer className={styles.footer}>
        This is the footer
      </footer>
    </div>
  )
}

export default Home