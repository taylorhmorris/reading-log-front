import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

interface Props {
  userData: {
    username: string,
    id: string
  }
}

const Home: NextPage<Props> = ({ userData }) => {

  return (
    <Layout>
      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <section className={styles.home}>
        Welcome, {userData.username}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const userData = {
    username: 'strudel',
    id: '1'
  }

  return {
    props: {
      userData
    }
  }
}

export default Home