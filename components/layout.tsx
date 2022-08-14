import Head from 'next/head';
import styles from '../styles/layout.module.css';

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Reading Log</title>
                <meta name="description" content="Track your past, current, and future readings!" />
                <meta name="og:title" content='Reading Log' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>This is the header</h1>
            </header>

            <main>{children}</main>

            <footer className={styles.footer}>
                This is the footer
            </footer>
        </div>
    )
};