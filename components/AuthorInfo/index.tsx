type Author = {
    firstNames: string,
    lastName: string
};

export default function AuthorInfo(props: {currentAuthor: Author}) {
    const {
        firstNames,
        lastName
    } = props.currentAuthor;

    return (
        <div>
            <h3>{firstNames}{" "}{lastName}</h3>
        </div>
    )
}