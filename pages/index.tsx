import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { test_token, get_api_url } from '../utils/local'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

interface Props {
    username: string
}

const Home: NextPage<Props> = ({ username }) => {

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

  // const token = test_token();
  // const api = get_api_url();
  // const url = `${api}/users/4`

  // const response = await fetch(url, {
  //   method: 'GET',
  //   headers: { 'Authorization': `Bearer ${token}` }
  // })
  // const data = await response.json();
  // const { username, id } = data;

  const username = 'Test User';

  return {
    props: {
      username
    }
  }
}

export default Home