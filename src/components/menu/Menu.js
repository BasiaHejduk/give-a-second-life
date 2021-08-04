import {scroller} from "react-scroll";

import './Menu.scss';

const Menu = () => {
    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };

    return (
        <div className="menu">
            <div className="menu__login-list">
                <div className="menu__login">Zaloguj</div>
                <div className="menu__login">Załóż konto</div>
            </div>
            <ul className="menu__item-list">
                <li className="menu__item" onClick={()=> handleOnClickMenu("start")}>Start</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("steps")}>O co chodzi?</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("about")}>O nas</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("help")}>Fundacja i organizacje</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("contact")}>Kontakt</li>
            </ul>
        </div>
    )
}

export default Menu;