type Book = {
    author: string,
    title: string,
    length: number,
    language: string,
    publicationDate: number,
    edition: string
};

export default function BookInfo(props: {currentBook: Book}) {
    const {
        author,
        title,
        length,
        language,
        publicationDate,
        edition
    } = props.currentBook;

    return (
        <div>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <ul>
                <li>Page length: {length}</li>
                <li>Language: {language}</li>
                <li>Published on: {publicationDate}</li>
                <li>Edition: {edition}</li>
            </ul>
        </div>
    )
}