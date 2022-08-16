import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Home: NextPage = (props) => {

  const { apiData } = props;

  return (
    <Layout>
      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <section className={styles.home}>
        Welcome, {apiData.user}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const user = 'username';
  const apiData = { user: user };
  return {
    props: {
      apiData
    }
  }
}

export default Home