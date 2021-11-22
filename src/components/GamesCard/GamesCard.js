// Styles
import * as C from "./styles";

export const GamesCard = ({ url,title, thumbnail, resume }) => {

    const description =
        resume.length > 100 ? resume.substring(0, 100) + "..." : resume;
    return (
        <C.Container>
            <C.Image src={thumbnail} />
            <h3>{title}</h3>
            <p>{description}</p>
            <C.Button to={`games/${url}`}>Detalhes</C.Button>
        </C.Container>
    );
};
