import * as C from "./styles";

export function NewsCard({ id, title, thumbnail, description, url }) {
    return (
        <C.Container key={id}>
            <C.CardImage src={thumbnail} alt={title} />
            <C.CardResume>
                <h4>{title}</h4>
                <p>{description}</p>
                <button type="button">
                    <a href={url} target="_blank" rel='noreferrer'>
                        Ver no site
                    </a>
                </button>
            </C.CardResume>
        </C.Container>
    );
}
