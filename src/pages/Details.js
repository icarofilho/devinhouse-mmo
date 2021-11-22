import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Detailcard } from "../components/DetailCard";
import { Form } from "../components/Form";

import * as C from "./styles";

const Details = () => {
    const param = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const gameURL =
            process.env.REACT_APP_UNSPLASH_GAMEDETAIL + `${param.id}`;

        const config = {
            method: "GET",
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_UNSPLASH_HOST,
                "x-rapidapi-key": process.env.REACT_APP_UNSPLASH_KEY,
            },
        };
        fetch(gameURL, config)
            .then((response) => response.json())
            .then((data) => setDetail(data));
    }, []);

    

    return (
        <C.DetailsContainer>
            {detail.length !== 0 ? (
                <>
                    <Detailcard
                        title={detail.title}
                        resume={detail.description}
                        date={detail.release_date}
                        requirements={detail.minimum_system_requirements}
                        genre={detail.genre}
                        platform={detail.platform}
                        images={detail.screenshots}
                    />
                    <Form id={detail.id} />
                </>
            ) : (
                <h1>Carregando</h1>
            )}
        </C.DetailsContainer>
    );
};

export default Details;
