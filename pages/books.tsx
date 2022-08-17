import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import BookInfo from '../components/BookInfo'

const Books: NextPage = (props) => {
    const books = [{
        author: 'Douglas Adams',
        title: 'The Hitchhikers Guide to the Galaxy',
        length: 42,
        language: 'English',
        publicationDate: 1942,
        edition: '1st'
    }, {
        author: 'J.R.R. Tolkien',
        title: 'The Hobbit',
        length: 300,
        language: 'English',
        publicationDate: 1901,
        edition: '1st'
    }, {
        author: 'David Foster Wallace',
        title: 'Infinite Jest',
        length: 1000000,
        language: 'English',
        publicationDate: 1990,
        edition: '1st'
    }];

    // const [ currentBook, setCurrentBook ] = useState({});
    const currentBook = books[0];

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
                            <p className={styles.bookTitle}>{book.title}</p>
                        </div>
                    )
                })}
                </div>  
                <div>
                    <BookInfo
                        title={currentBook.title}
                        author={currentBook.author}
                        length={currentBook.length}
                        language={currentBook.language}
                        publicationDate={currentBook.publicationDate}
                        edition={currentBook.edition}
                    />  
                </div>        
            </section>
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const books = [{
//         author: 'Douglas Adams',
//         title: 'The Hitchhikers Guide to the Galaxy',
//         length: 42,
//         language: 'English',
//         publicationDate: Date.now(),
//         edition: '1st'
//     }, {
//         author: 'J.R.R. Tolkien',
//         title: 'The Hobbit',
//         length: 300,
//         language: 'English',
//         publicationDate: Date.now(),
//         edition: '1st'
//     }, {
//         author: 'David Foster Wallace',
//         title: 'Infinite Jest',
//         length: 1000000,
//         language: 'English',
//         publicationDate: Date.now(),
//         edition: '1st'
//     }]

//     return {
//       props: {
//         books
//       }
//     }
// }

export default Books