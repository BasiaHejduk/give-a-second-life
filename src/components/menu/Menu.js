import {scroller} from "react-scroll";
import { Link } from 'react-router-dom';
import './Menu.scss';
import { useState } from "react";

const Menu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };
    const toggleMobileMenu = () => {
        setMobileMenu((prevState) => !prevState);
    }

    return (
        <div className="menu">
            { mobileMenu ? 
                <div className="menu__hamburger menu__hamburger--cross" onClick={toggleMobileMenu}></div> :
                <div className="menu__hamburger" onClick={toggleMobileMenu}></div>
            }
            <div className="menu__login-list">
                <Link to="/logowanie" className="menu__link">
                    <div className="menu__login">Zaloguj</div>
                </Link>
                <Link to="/rejestracja" className="menu__link">
                    <div className="menu__login">Załóż konto</div>
                </Link>
            </div>
            { mobileMenu ? 
                <ul className="menu__mobile-list">
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("start"); toggleMobileMenu()}}>Start</li>
                    </Link>
                    <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("steps"); toggleMobileMenu()}}>O co chodzi?</li>
                    <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("about"); toggleMobileMenu()}}>O nas</li>
                    <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("help"); toggleMobileMenu()}}>Fundacja i organizacje</li>
                    <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("contact"); toggleMobileMenu()}}>Kontakt</li>
                </ul> : null
            }
            <ul className="menu__item-list">
                <Link to="/" className="menu__link">
                    <li className="menu__item" onClick={()=> handleOnClickMenu("start")}>Start</li>
                </Link>
                <li className="menu__item" onClick={()=> handleOnClickMenu("steps")}>O co chodzi?</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("about")}>O nas</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("help")}>Fundacja i organizacje</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("contact")}>Kontakt</li>
            </ul>
        </div>
    )
}

export default Menu;