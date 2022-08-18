type Author = {
    firstNames: string,
    lastName: string,
    books: {
        title: string
    }[]
};

export default function AuthorInfo(props: {currentAuthor: Author}) {
    const {
        firstNames,
        lastName,
        books
    } = props.currentAuthor;

    return (
        <div>
            <h3>{firstNames}{" "}{lastName}</h3>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.title}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}