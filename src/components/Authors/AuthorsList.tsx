import React from 'react';
import { IAuthor } from '../../interfaces/IAuthor';
import AuthorFetchHandler from '../../utils/authorFetchHandler';
import { AuthorsListItem } from './AuthorsListItem';

export type AuthorsListPropsType = Record<any, never>;

export interface AuthorsListStateType {
  authors: IAuthor[];
}

export class AuthorsList extends React.Component<
  AuthorsListPropsType,
  AuthorsListStateType
> {
  constructor(props: AuthorsListPropsType) {
    super(props);
    this.state = {
      authors: [],
    };
  }

  fetchAuthors() {
    AuthorFetchHandler.get_authors()
      .then((authors: IAuthor[]) => {
        authors.sort((a: IAuthor, b: IAuthor) => {
          return a.lastName.localeCompare(b.lastName);
        });
        this.setState(() => ({
          authors: authors,
        }));
      })
      .catch((error) => {
        console.error(`Could not fetch authors: ${error}`);
        return [];
      });
  }

  componentDidMount(): void {
    this.fetchAuthors();
  }

  render() {
    const listAuthors = this.state.authors.map((author) => (
      <AuthorsListItem key={author.id} author={author} />
    ));
    return <div>{listAuthors}</div>;
  }
}
