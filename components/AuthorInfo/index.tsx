type Author = {
    firstNames: string,
    lastName: string,
    // id: number,
    // books: {
    //     title: string
    // }[]
};

export default function AuthorInfo(props: {currentAuthor: Author}) {
    const {
        firstNames,
        lastName,
        // id,
        // books
    } = props.currentAuthor;

    return (
        <div>
            <h3>{firstNames}{" "}{lastName}</h3>
            {/* <ul>
                {books.map(book => {
                    return (
                        <li key={`${book.title}${id}`}>{book.title}</li>
                    )
                })}
            </ul> */}
        </div>
    )
}