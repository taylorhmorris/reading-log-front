import type { NextPage } from 'next'
// import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../Context'
import AuthService from '../utils/auth'

import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

interface Props {
    username: string
}

const Home: NextPage<Props> = () => {

  const [ context, setContext ] = useContext(Context);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});

  const router = useRouter();

  useEffect(() => {
    // Code for <if statement to check window Object> is sourced from https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he | original author is Ibrahim Adeniyi
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('id_token');
      const isLoggedIn = AuthService.loggedIn(token);
      const decodedData = AuthService.getProfile(token);

      setLoggedIn(isLoggedIn);
      console.log(decodedData);
    }
  },[])

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
              setContext({ 
                userId: 0
              });
              setLoggedIn(false);
              AuthService.logout();
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
            <Link href='/Signup'>
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