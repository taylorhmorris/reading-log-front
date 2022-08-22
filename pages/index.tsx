import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { Context } from '../Context'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

interface Props {
    username: string
}

const Home: NextPage<Props> = ({ username }) => {

  const [ context, setContext ] = useContext(Context);
  const router = useRouter();
  const loggedIn = context.loggedIn;

  useEffect(() => {
    if (!loggedIn) {
      router.replace('/signup');
    }
  }, [loggedIn, router])

  return (
    <Layout>
      <aside className={styles.aside}>
        <Navbar />
      </aside>
      <section className={styles.home}>
        Welcome, {username}
        <br />
        <button onClick={() => setContext({ userId: 0, access_token: '', loggedIn: false })}>
          Logout
        </button>
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