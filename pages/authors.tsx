import type { NextPage } from 'next'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { test_token, get_api_url } from '../utils/local'
import InferNextPropsType from "infer-next-props-type"
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import AuthorInfo from '../components/AuthorInfo'

type Author = {
    firstNames: string,
    lastName: string,
    // id: number,
    // books: {
    //     title: string
    // }[]
}
interface Props {
    authors?: Author[],
    id: number
}

const Authors: NextPage<Props> = ({ authors, id }: InferNextPropsType<typeof getStaticProps>) => {

    let firstAuthor = {
        firstNames: ' ',
        lastName: ' ',
        // id: 0,
        // books: [{
        //     title: ' '
        // }]
    };
    if (authors.length) {
        firstAuthor = authors[0];
    }

    const [ currentAuthor, setCurrentAuthor ] = useState<Author>(firstAuthor);
    const selectAuthors = [];

    for (let i = 0; i < authors.length; i++) {
        if (authors[i].ownerId == id) {
            selectAuthors.push(authors[i]);
        }
    }
    if (!selectAuthors.length) {
        selectAuthors.push(firstAuthor);
    }

    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.books}>
                <div className={styles.bookList}>
                {selectAuthors.map(author => {
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

export const getStaticProps: GetStaticProps = async () => {

    const token = test_token();
    const api = get_api_url();
    const userUrl = `${api}/users/4`;
    const authorsUrl = `${api}/authors`;
  
    const getUser = await fetch(userUrl, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const userData = await getUser.json();
    const { id } = userData;
  
    const getAuthors = await fetch(authorsUrl, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const authors = await getAuthors.json();

    return {
      props: {
        authors,
        id
      }
    }
}

export default Authors