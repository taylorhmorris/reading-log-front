import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { Context } from '../Context'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { format_date } from '../utils/helpers'

import Navbar from '../components/Navbar'

const placeholderBook = {
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
}

const CurrentReadings: NextPage = () => {

    const [ context, setContext ] = useContext(Context);
    const loggedIn = context.loggedIn;

    const [ currentReading, setCurrentReading ] = useState(placeholderBook);
    const [ progress, setProgress ] = useState(100);
    const [ pagesLogged, setPagesLogged ] = useState(0);

    const inputChangeHandler = (event: React.FormEvent<EventTarget>): void => {
        let target = event.target as HTMLInputElement;
        const { value } = target;
        const newPages = Math.floor(parseInt(value));

        if (!value) {
            setPagesLogged(0)
        } else {
            setPagesLogged(newPages)
        }
    };

    const logPageHandler = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();

        if (!pagesLogged) {
            return;
        }

        const newProgress = pagesLogged + progress;
        setProgress(newProgress);
    }

    return (
        <Layout>
            {loggedIn ? (
            <>
                <aside className={styles.aside}>
                  <Navbar />
                </aside>
                
                <section className={styles.books}>
                    <div className={styles.curReadingBookInfo}>
                        <h3>{currentReading.book.title}</h3>
                        <h4>by {currentReading.book.author}</h4>
                        <ul>
                            <li>Total Pages: {currentReading.book.length}</li>
                            <li>Language: {currentReading.book.language}</li>
                            <li>Published on: {currentReading.book.publicationDate}</li>
                            <li>Edition: {currentReading.book.edition}</li>
                        </ul>
                    </div> 

                    <div className={styles.curReadingLogInfo}>
                        <p>Start Date: {format_date(currentReading.startDate)}</p>
                        <p>Today&apos;s date: {format_date(Date.now())}</p>
                        <br />
                        <p><strong>Current Progress:</strong> {progress}</p>
                        <br />
                        <p><strong>Pages Read Toady:</strong> {pagesLogged}</p>
                        <br />
                        <label htmlFor='newRead'><strong>How many pages did you read today?</strong></label>
                        <input 
                            type='number'
                            name='newRead'
                            step='1'
                            defaultValue={0}
                            onChange={inputChangeHandler}
                        />
                        <button
                            type='button'
                            name='log'
                            onClick={logPageHandler}
                        >Log Pages</button>
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