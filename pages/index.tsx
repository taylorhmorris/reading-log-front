import type { NextPage } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <Layout>
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