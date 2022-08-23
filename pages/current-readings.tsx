import type { NextPage } from 'next'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../Context'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const CurrentReadings: NextPage = () => {

    const [ context, setContext ] = useContext(Context);
    const loggedIn = context.loggedIn;

    return (
        <Layout>
            {loggedIn ? (
            <>
                <aside className={styles.aside}>
                  <Navbar />
                </aside>
                
                <section className={styles.home}>
                    {context.userId}
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

export default CurrentReadings