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
      <Link to="/">
        <span id="home" className={styles.link}>
          Home
        </span>
      </Link>
      <Link to="/current-readings">
        <span id="current-readings" className={styles.link}>
          Current Readings
        </span>
      </Link>
      <Link to="/past-readings">
        <span id="past-readings" className={styles.link}>
          Past Readings
        </span>
      </Link>
      <Link to="/books">
        <span id="books" className={styles.link}>
          Books
        </span>
      </Link>
      <Link to="/authors">
        <span id="authors" className={styles.link}>
          Authors
        </span>
      </Link>
      <button onClick={() => toggleLoggedIn()}>Log Out</button>
    </nav>
  );
}
