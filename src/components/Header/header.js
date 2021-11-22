import * as C from "./styles";
import {BsMoonStarsFill, BsSun} from "react-icons/bs";


export const Header = (props) => {
    return (
        <C.Container>
            <div className='space title'>
                <h2>DevinHouse</h2>
            </div>
            <div className='space'>
                <C.Button to="/">News</C.Button>
                <C.Button to="/games">Games</C.Button>

            </div>
            <div className='space'>
                {props.theme === false ? <BsMoonStarsFill /> : < BsSun/>}
                <button onClick={() => props.toggleTheme()}>{props.theme === false ? 'Tema Dark' : 'Tema Light'}</button>
            </div>
        </C.Container>
    );
    
};
