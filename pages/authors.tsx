import type { NextPage } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Authors: NextPage = () => {
    return (
        <Layout>
            <aside className={styles.aside}>
              <Navbar />
            </aside>
        
            <section className={styles.home}>
                This is the authors page
            </section>
        </Layout>
    )
}

export default Authors