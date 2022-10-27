import { AuthorsList } from '../components/Authors/AuthorsList';
import styles from '../styles/authors.module.css';

export function Authors() {
  return (
    <section className={styles.container}>
      <h2>Authors</h2>
      <AuthorsList />
    </section>
  );
}
