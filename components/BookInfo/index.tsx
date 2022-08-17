type Props = {
    author: string,
    title: string,
    length: number,
    language: string,
    publicationDate: number,
    edition: string
};

export default function BookInfo(props: (Props)) {
    const {
        author,
        title,
        length,
        language,
        publicationDate,
        edition
    } = props;

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