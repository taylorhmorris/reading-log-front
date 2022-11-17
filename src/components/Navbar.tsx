import { useEffect } from 'react';
import { useUpdateUserContext } from '../context/UserContext';
import AuthService from '../utils/auth';
import styles from '../styles/navbar.module.css';

export function Navbar() {
  const { toggleLoggedIn } = useUpdateUserContext();

  useEffect(() => {
    let page = window.location.pathname.split('/')[1];
    if (page === '') page = 'home';
    const el = document.querySelector(`#${page}`);
    const current = ' ' + styles.current;
    if (el) el.className += current;
  }, []);

  return (
    <nav className={styles.navbar}>
      <a href="/" id="home" className={styles.link}>
        Home
      </a>
      <a href="/current-readings" id="current-readings" className={styles.link}>
        Current Readings
      </a>
      <a href="/past-readings" id="past-readings" className={styles.link}>
        Past Readings
      </a>
      <a href="/books" id="books" className={styles.link}>
        Books
      </a>
      <a href="/authors" id="authors" className={styles.link}>
        Authors
      </a>
      <button
        onClick={() => {
          AuthService.logout();
          toggleLoggedIn();
        }}
      >
        Log Out
      </button>
    </nav>
  );
}
