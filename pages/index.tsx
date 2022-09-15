import type { NextPage } from 'next'
// import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../Context'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

interface Props {
    username: string
}

const Home: NextPage<Props> = () => {

  const [ context, setContext ] = useContext(Context);
  const router = useRouter();
  const loggedIn = context.loggedIn;

  return (
    <Layout>
      {loggedIn ? (
      <>
      <aside className={styles.aside}>
        <Navbar />
      </aside>
      <section className={styles.home}>
        Welcome, {context.userId}
        <br />
        <button onClick={() => {
          setContext({ userId: 0, access_token: '', loggedIn: false })
          router.replace('/login');
        }}>
          Logout
        </button>
      </section>
      </>
      ) : (
        <>
          <section className={styles.home}>
            You are not logged in. Please log in, or create an account.
            <Link href='/login'>
              <a className={styles.navlink}>
                Login
              </a>
            </Link>
            <Link href='/signup'>
              <a className={styles.navlink}>
                Create Account
              </a>
            </Link>
          </section>
        </>
      )}
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {

//   const username = 'Test User';

//   return {
//     props: {
//       username
//     }
//   }
// }

export default Home