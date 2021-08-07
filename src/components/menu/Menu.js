import {scroller} from "react-scroll";
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };

    return (
        <div className="menu">
            <div className="menu__login-list">
                <Link to="/logowanie" className="menu__link"><div className="menu__login">Zaloguj</div></Link>
                <Link to="/rejestracja" className="menu__link"><div className="menu__login">Załóż konto</div></Link>
            </div>
            <ul className="menu__item-list">
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("start")}>Start</li></Link>
                <li className="menu__item" onClick={()=> handleOnClickMenu("steps")}>O co chodzi?</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("about")}>O nas</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("help")}>Fundacja i organizacje</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("contact")}>Kontakt</li>
            </ul>
        </div>
    )
}

export default Menu;