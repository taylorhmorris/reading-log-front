import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  const apiData = 'username';

  return (
    <Layout>
      <aside className={styles.aside}>
        <Navbar />
      </aside>

      <section className={styles.home}>
        Welcome, {apiData}
      </section>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const apiData = 'username';
//   return {
//     props: {
//       apiData
//     }
//   }
// }

export default Home