import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUpdateUserContext } from '../context/UserContext';
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
      <Link to="/" id="home" className={styles.link}>
        Home
      </Link>
      <Link
        to="/current-readings"
        id="current-readings"
        className={styles.link}
      >
        Current Readings
      </Link>
      <Link to="/past-readings" id="past-readings" className={styles.link}>
        Past Readings
      </Link>
      <Link to="/books" id="books" className={styles.link}>
        Books
      </Link>
      <Link to="/authors" id="authors" className={styles.link}>
        Authors
      </Link>
      <button onClick={() => toggleLoggedIn()}>Log Out</button>
    </nav>
  );
}
