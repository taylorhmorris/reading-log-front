import type { NextPage } from 'next'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import InferNextPropsType from "infer-next-props-type"
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import AuthorInfo from '../components/AuthorInfo'

type Author = {
    firstNames: string,
    lastName: string,
    ownerId: number,
    id: number
}
interface Props {
    authors: Author[],
    id: number
}

const Authors: NextPage<Props> = ({ authors, id }: InferNextPropsType<typeof getStaticProps>) => {

    const [ currentAuthor, setCurrentAuthor ] = useState<Author>({ firstNames: '', lastName: ' ', ownerId: 0, id: 0 });
    const selectAuthors = [];

    for (let i = 0; i < authors.length; i++) {
        if (authors[i].ownerId == id) {
            selectAuthors.push(authors[i]);
        }
    }

    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.books}>
                <div className={styles.bookList}>
                {selectAuthors.length ? (
                    selectAuthors.map(author => {
                        return (
                            <div key={author.id} className={styles.bookItem}>
                                <button
                                    className={styles.bookTitle}
                                    onClick={() => {setCurrentAuthor(author)}}
                                >
                                    {author.firstNames}{" "}{author.lastName}
                                </button>
                            </div>
                        )})
                    ) : (
                        <div>No authors added.</div>
                    )
                }
                </div>  
                <div className={styles.bookInfo}>
                    <p>Author info:</p>
                    <AuthorInfo
                        currentAuthor={currentAuthor}
                    />  
                </div>  
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const authors = [{
        firstNames: 'Douglas',
        lastName: 'Adams',
        ownerId: 4,
        id: 1
    },
    {
        firstNames: 'J.R.R',
        lastName: 'Tolkien',
        ownerId: 4,
        id: 2
    }]
    const id = 4;

    return {
      props: {
        authors,
        id
      }
    }
}

export default Authors