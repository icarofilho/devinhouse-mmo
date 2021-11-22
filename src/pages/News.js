// Componentes
import { NewsCard } from "../components/NewsCard";
import { SearchBar } from "../components/SearchBar";
// Hooks
import { useState, useEffect } from "react";
// Styles
import * as C from "./styles";

const News = () => {
    const [father, setFather] = useState("");
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        const newsUrl = process.env.REACT_APP_UNSPLASH_NEWSURL;
        const config = {
            method: "GET",
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_UNSPLASH_HOST,
                "x-rapidapi-key": process.env.REACT_APP_UNSPLASH_KEY,
            },
        };
        fetch(newsUrl, config)
            .then((response) => response.json())
            .then((data) => setNews(data));
    }, []);

    return (
        <C.NewsContainer>
            <SearchBar
                setProps={setFather}
                value={father}
                textoPesquisa="as ultimas noticias"
            />
            
            {news.length > 0 ? (
                news.map((notice) => {
                    if (father === "") {
                        return (
                            <NewsCard
                                key={notice.id}
                                title={notice.title}
                                thumbnail={notice.thumbnail}
                                description={notice.short_description}
                                url={notice.article_url}
                            />
                        );
                    } else if (
                        notice.title
                            .toLowerCase()
                            .includes(father.toLowerCase())
                    ) {
                        return (
                            <NewsCard
                                key={notice.id}
                                title={notice.title}
                                thumbnail={notice.thumbnail}
                                description={notice.short_description}
                                url={notice.article_url}
                            />
                        );
                    }
                })
            ) : (
                <h2>Carregando</h2>
            )}
        </C.NewsContainer>
    );
};

export default News;
