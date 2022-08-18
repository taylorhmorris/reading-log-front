import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import AuthorInfo from '../components/AuthorInfo'

// type Author = {
//     firstNames: string,
//     lastName: string,
//     id: number,
//     books: {
//         title: string
//     }[]
// };

type Author = {
    firstNames: string,
    lastName: string,
    id: number,
    books: {
        title: string
    }[]
}
interface Props {
    authors: Author[]
}

const Authors: NextPage<Props> = ({ authors }) => {

    const [ currentAuthor, setCurrentAuthor ] = useState<Author>(authors[0])

    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.home}>
                <div className={styles.bookList}>
                {authors.map(author => {
                    return (
                        <div key={author.id} className={styles.bookItem}>
                            <button
                                className={styles.bookTitle}
                                onClick={() => {setCurrentAuthor(author)}}
                            >
                                {author.firstNames}{" "}{author.lastName}
                            </button>
                        </div>
                    )
                })}
                </div>  
                <div className={styles.bookInfo}>
                    <AuthorInfo
                        currentAuthor={currentAuthor}
                    />  
                </div>  
            </section>
        </Layout>
    )
}

export default Authors