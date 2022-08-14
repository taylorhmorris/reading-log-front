import type { NextPage } from 'next'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <section className={styles.home}>
        This is the home page
      </section>
    </Layout>
  )
}

export default Home