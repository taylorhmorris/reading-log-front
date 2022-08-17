import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Books: NextPage = (props) => {
    const books = [{
        author: 'Douglas Adams',
        title: 'The Hitchhikers Guide to the Galaxy',
        length: 42,
        language: 'English',
        publicationDate: Date.now(),
        edition: '1st'
    }, {
        author: 'J.R.R. Tolkien',
        title: 'The Hobbit',
        length: 300,
        language: 'English',
        publicationDate: Date.now(),
        edition: '1st'
    }, {
        author: 'David Foster Wallace',
        title: 'Infinite Jest',
        length: 1000000,
        language: 'English',
        publicationDate: Date.now(),
        edition: '1st'
    }];

    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.books}>
                {books.map(book => {
                    return (
                        <div key={book.title} className={styles.bookCard}>
                            <p className={styles.bookTitle}>{book.title}</p>
                            <p className={styles.bookAuthor}>by {book.author}</p>
                            <ul className={styles.bookInfo}>
                                <li>Page length: {book.length}</li>
                                <li>Language: {book.language}</li>
                                <li>Published on: {book.publicationDate}</li>
                                <li>Edition: {book.edition}</li>
                            </ul>
                        </div>
                    )
                })}              
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