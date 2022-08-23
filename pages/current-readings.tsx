import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { Context } from '../Context'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { format_date } from '../utils/helpers'

import Navbar from '../components/Navbar'

const CurrentReadings: NextPage = () => {

    const [ context, setContext ] = useContext(Context);
    const loggedIn = context.loggedIn;

    const [ currentReading, setCurrentReading ] = useState({
        ownerId: 4,
        bookId: 1,
        startDate: Date.now(),
        book: {
            author: 'Douglas Adams',
            title: 'The Hitchhikers Guide to the Galaxy',
            length: 208,
            language: 'English',
            publicationDate: 1979,
            edition: '1st'
        }
    });

    return (
        <Layout>
            {loggedIn ? (
            <>
                <aside className={styles.aside}>
                  <Navbar />
                </aside>
                
                <section className={styles.books}>
                    <div className={styles.currentReadingInfo}>
                        <p>Current Progress: <span id='progress'></span></p>
                        <p>Pages Read Toady: <span id='pagesRead'></span></p>
                        <p>Today&apos;s date: {format_date(Date.now())}</p>
                        <label htmlFor='newRead'>How many pages did you read today?</label>
                        <input 
                            type='text'
                            name='newRead'
                        />
                        <button>Log Pages</button>
                    </div>  
                    <div className={styles.bookInfo}>
                        <h3>{currentReading.book.title}</h3>
                        <h4>by {currentReading.book.author}</h4>
                        <ul>
                            <li>Total Pages: {currentReading.book.length}</li>
                            <li>Language: {currentReading.book.language}</li>
                            <li>Published on: {currentReading.book.publicationDate}</li>
                            <li>Edition: {currentReading.book.edition}</li>
                        </ul>
                    </div> 
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