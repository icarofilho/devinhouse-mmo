import { useHistory } from "react-router-dom";
import { SlideShow } from "../SlideShow";
import * as C from "./styles";
export const Detailcard = ({
    id,
    images,
    title,
    resume,
    date,
    requirements,
    genre,
    platform,
}) => {

    const history = useHistory();
    

    const releaseDate = (date) => {
        let release = date !== undefined ? date.split("-") : "unknown";
        release = release[2] + "/" + release[1] + "/" + release[0];
        return release;
    };
    const description = (text) => {
        let textDescription =
            resume !== undefined
                ? resume.replace(/<p style="text-align: justify;">/g, "")
                : "";
        textDescription =
            textDescription !== undefined
                ? textDescription.replace(/<\/p>/g, "")
                : "";
        return textDescription;
    };

    
    return (
        <>
            <button onClick={() => history.goBack()}>Voltar</button>
            {/* TITULO */}
            <h1>
                {" "}
                {title} - ({releaseDate(date)}){" "}
            </h1>
            {/* IMAGES */}
            <SlideShow images = {images}/>
            <C.DescriptionArea>
                <div className="row">
                    <div>
                        <h3>Genero</h3>
                        <p>{genre}</p>
                    </div>
                    <div>
                        <h3>Plataforma</h3>
                        <p>{platform}</p>
                    </div>
                </div>
                <h3>Descrição</h3>
                <p>{description(resume)}</p>
            </C.DescriptionArea>
            <h3>Requisitos</h3>
            <C.DescriptionArea>
                <div className="row req">
                    <div className="sys fix">
                        <p>Sistema Operacional:</p>
                        <p>Processador:</p>
                        <p>Memória:</p>
                        <p>Gráficos:</p>
                        <p>Espaço em disco:</p>
                    </div>
                    <div className="sys">
                        <p>{requirements.os}</p>
                        <p>{requirements.processor}</p>
                        <p>{requirements.memory}</p>
                        <p>{requirements.graphics}</p>
                        <p>{requirements.storage}</p>
                    </div>
                </div>
            </C.DescriptionArea>
        </>
    );
};
