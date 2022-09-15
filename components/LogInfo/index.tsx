import { format_date } from '../../utils/helpers'

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
        length
    } = props.currentBook;

    return (
        <div>
            <h3>{title}</h3>
            <h4>by {author}</h4>
            <p>Total Pages: {length}</p>
            <p>Reading Log:</p>
            <ul>
                <li>0 pages read on {format_date(Date.now())}</li>
            </ul>
        </div>
    )
}