import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { test_token, test_url } from '../utils/local'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

interface Props {
    username: string,
    id: number
}

const Home: NextPage<Props> = ({ username, id }) => {

  return (
    <Layout>
      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <section className={styles.home}>
        Welcome, {username}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const token = test_token();
  const api = test_url();
  const url = `https://${api}`

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  const data = await response.json();
  const { username, id } = data;

  return {
    props: {
      username,
      id
    }
  }
}

export default Home