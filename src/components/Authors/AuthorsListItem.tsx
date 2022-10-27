import React from 'react';
import { IAuthor } from '../../interfaces/IAuthor';
import styles from '../../styles/authors.module.css';

export interface AuthorsListItemPropsType {
  author: IAuthor;
}

export interface AuthorsListItemStateType {
  isExpanded: boolean;
}

export class AuthorsListItem extends React.Component<
  AuthorsListItemPropsType,
  AuthorsListItemStateType
> {
  constructor(props: AuthorsListItemPropsType) {
    super(props);
    this.state = { isExpanded: false };

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState((prevState: AuthorsListItemStateType) => ({
      isExpanded: prevState.isExpanded ? false : true,
    }));
  }

  render() {
    let details = <> </>;
    if (this.state.isExpanded) {
      /*
       * This will replaced by a BooksList (by author)
       */
      details = (
        <>
          <hr />
          Books, etc.
        </>
      );
    }
    return (
      <>
        <div className={styles.container}>
          <h4 onClick={this.toggleExpand} className={styles.clickable}>
            {this.props.author.lastName.toUpperCase()},{' '}
            {this.props.author.firstNames}
          </h4>
          {details}
        </div>
        <hr />
      </>
    );
  }
}
