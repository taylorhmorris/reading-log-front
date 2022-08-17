import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import BookInfo from '../components/BookInfo'

type Book = {
    author: string,
    title: string,
    length: number,
    language: string,
    publicationDate: number,
    edition: string
};

const Books: NextPage = () => {
    const books = [{
        author: 'Douglas Adams',
        title: 'The Hitchhikers Guide to the Galaxy',
        length: 208,
        language: 'English',
        publicationDate: 1979,
        edition: '1st'
    }, {
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
    }];

    const [ currentBook, setCurrentBook ] = useState<Book>(books[0]);

    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.books}>
                <div className={styles.bookList}>
                {books.map(book => {
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
                    <BookInfo
                        currentBook={currentBook}
                    />  
                </div>        
            </section>
        </Layout>
    )
}

export default Books