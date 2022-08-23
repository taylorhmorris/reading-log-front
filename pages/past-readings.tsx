import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { Context } from '../Context'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { format_date } from '../utils/helpers'

import Navbar from '../components/Navbar'

type Book = {
    author: string,
    title: string,
    length: number,
    language: string,
    publicationDate: number,
    edition: string
};

const placeholderBooks = [
    {
        author: 'J.R.R. Tolkien',
        title: 'The Hobbit',
        length: 304,
        language: 'English',
        publicationDate: 1937,
        edition: '1st'
    }, {
        author: 'David Foster Wallace',
        title: 'Infinite Jest',
        length: 1079,
        language: 'English',
        publicationDate: 1996,
        edition: '1st'
    }
]

const PastReadings: NextPage = () => {
    const [ context, setContext ] = useContext(Context);
    const loggedIn = context.loggedIn;

    const [ currentBook, setCurrentBook ] = useState<Book>({
        author: '',
        title: '',
        length: 0,
        language: '',
        publicationDate: 0,
        edition: ''       
    });

    return (
        <Layout>
            {loggedIn ? (
            <>
                <aside className={styles.aside}>
                  <Navbar />
                </aside>
                
                <section className={styles.books}>
                    <div className={styles.bookList}>
                    {placeholderBooks.map(book => {
                        return (
                            <div key={book.title} className={styles.bookItem}>
                                <button
                                    className={styles.bookTitle}
                                    onClick={() => {setCurrentBook(book)}}
                                >
                                    {book.title}
                                </button>
                            </div>
                        )
                    })}
                    </div>  
                    <div className={styles.bookInfo}>
                        <LogInfo
                            currentBook={currentBook}
                        />  
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

export default PastReadings