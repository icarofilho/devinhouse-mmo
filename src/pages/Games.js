// Hooks
import { useState, useEffect } from "react";
//! teste

// Components
import { GamesCard } from "../components/GamesCard";
import { SearchBar } from "../components/SearchBar";
// Styles
import * as C from "./styles";

const News = () => {
    const [father, setFather] = useState("");
    const [games, setGames] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const gameURL = process.env.REACT_APP_UNSPLASH_GAMELIST;
        const config = {
            method: "GET",
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_UNSPLASH_HOST,
                "x-rapidapi-key": process.env.REACT_APP_UNSPLASH_KEY,
            },
        };
        fetch(gameURL, config)
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);

    const contador = () => {
        if (father === "") {
            return games.length;
        }
    };
    return (
            <C.GamesContainer>
                <div className='searchBarContainer'>
                    <SearchBar setProps={setFather} value={father} textoPesquisa='pelo seu jogo'/>
                    <h4 style={{ display: "block" }}>
                        {father === '' ? `Total de jogos: ${contador()}` : `Pesquisa por ${father}`}
                    </h4>
                </div>
                {games.length > 0 ? (
                    games.map((game) => {
                        if (father === "") {
                            
                            return (
                                <GamesCard
                                    url={game.id}
                                    key={game.id}
                                    title={game.title}
                                    thumbnail={game.thumbnail}
                                    resume={game.short_description}
                                />
                            );
                        } else if (
                            game.title
                                .toLowerCase()
                                .includes(father.toLowerCase())
                        ) {
                            return (
                                <GamesCard
                                    url={game.id}
                                    key={game.id}
                                    title={game.title}
                                    thumbnail={game.thumbnail}
                                    resume={game.short_description}
                                />
                            );
                        }
                    })
                ) : (
                    <h2>Carregando</h2>
                )}
            </C.GamesContainer>
    );
};

export default News;
