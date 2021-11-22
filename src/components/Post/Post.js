import * as C from "./styles";
import { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { setStorage, getStorage } from "../../Services/getStorage";

export const Post = ({ game, id, name, message, score }) => {
    const gameId = game
    const [scoreValue, setScoreValue] = useState(score);
    return (
        <C.PostContainer>
            <C.TextArea>
                <h3>{name}</h3>
                <p>{message}</p>
            </C.TextArea>
            <C.ScoreArea>
                <VscTriangleUp
                    className="VscTriangleGreen"
                    onClick={() => {
                        const storage = getStorage(gameId);
                        const pontos = {...storage[id]}
                        pontos.score += 5
                        storage[id] = pontos
                        setStorage(gameId, storage);
                        setScoreValue(scoreValue + 5);
                    }}
                />
                { scoreValue >= 0 ? <p className='green'>{scoreValue}</p> : <p className='red'>{scoreValue}</p> }
                <VscTriangleDown
                    className="VscTriangleDown"
                    onClick={() => {
                        const storage = getStorage(gameId);
                        const pontos = { ...storage[id] };
                        pontos.score -= 5;
                        storage[id] = pontos;
                        setStorage(gameId, storage);
                        setScoreValue(scoreValue - 5);
                    }}
                />
            </C.ScoreArea>
        </C.PostContainer>
    );
};
