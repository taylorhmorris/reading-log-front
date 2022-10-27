import { IAuthor } from '../../interfaces/IAuthor';
import { AuthorsListItem } from './AuthorsListItem';

export function AuthorsList() {
  function fetchAuthors(): IAuthor[] {
    /*
     *  This function will be replaced by the fetchHandler
     *  to get authors from the DB
     */
    return [
      { id: 1, lastName: 'Twain', firstNames: 'Mark' },
      { id: 3, lastName: 'Hemingway', firstNames: 'Ernest' },
      { id: 2, lastName: 'Stoppard', firstNames: 'Tom' },
    ];
  }

  const authors = fetchAuthors();
  authors.sort((a, b) => {
    return a.lastName.localeCompare(b.lastName);
  });
  const listAuthors = authors.map((author) => (
    <AuthorsListItem key={author.id} author={author} />
  ));

  return <div>{listAuthors}</div>;
}
