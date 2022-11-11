import React from 'react';
import { IAuthor } from '../../interfaces/IAuthor';
import { IBook } from '../../interfaces/IBook';
import BookFetchHandler from '../../utils/bookFetchHandler';

export interface AuthorDetailPropsType {
  author: IAuthor;
}

export interface AuthorDetailStateType {
  books: IBook[];
}

export class AuthorDetail extends React.Component<
  AuthorDetailPropsType,
  AuthorDetailStateType
> {
  constructor(props: AuthorDetailPropsType) {
    super(props);
    this.state = {
      books: [],
    };
  }

  fetchBooks() {
    BookFetchHandler.get_books()
      .then((books: IBook[]) => {
        books = books.filter((book) => {
          return book.authorId === this.props.author.id;
        });
        this.setState(() => ({
          books: books,
        }));
      })
      .catch((error) => {
        console.error(`Could not fetch books: ${error}`);
        return [];
      });
  }

  componentDidMount(): void {
    this.fetchBooks();
  }

  render() {
    const listBooks = this.state.books.map((book) => (
      <div key={book.id}>{book.title}</div>
    ));
    return <div>{listBooks}</div>;
  }
}
