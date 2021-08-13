import {scroller} from "react-scroll";
import { Link } from 'react-router-dom';
import './Menu.scss';

const MenuLoggedIn = ({handleLogout, user}) => {
    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };

    return (
        <div className="menu">
            <div className="menu__login-list">
                <p className="menu__welcome">Cześć {user.email}</p>
                <Link to="/oddaj-rzeczy" className="menu__link"><div className="menu__login">Oddaj rzeczy</div></Link>
                <Link to="/wylogowano" className="menu__link"><div className="menu__login" onClick={handleLogout}>Wyloguj</div></Link>
            </div>
            <ul className="menu__item-list">
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("start")}>Start</li></Link>
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("steps")}>O co chodzi?</li></Link>
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("about")}>O nas</li></Link>
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("help")}>Fundacja i organizacje</li></Link>
                <Link to="/" className="menu__link"><li className="menu__item" onClick={()=> handleOnClickMenu("contact")}>Kontakt</li></Link>
            </ul>
        </div>
    )
}

export default MenuLoggedIn;