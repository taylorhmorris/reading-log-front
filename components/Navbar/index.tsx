import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <a className={styles.navlink}>
                    Dashboard
                </a>
            </Link>
            <Link href='/current-readings'>
                <a className={styles.navlink}>
                    Current Readings
                </a>
            </Link>
            <Link href='/past-readings'>
                <a className={styles.navlink}>
                    Past Readings
                </a>
            </Link>
            <Link href='/authors'>
                <a className={styles.navlink}>
                    Authors
                </a>
            </Link>
            <Link href='/books'>
                <a className={styles.navlink}>
                    Books
                </a>
            </Link>
        </div>
    )
}