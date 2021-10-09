import { useState, useContext } from "react";
import {scroller} from "react-scroll";
import { Link } from 'react-router-dom';
import { AppContext } from "../../App";
import './Menu.scss';

const MenuLoggedIn = () => {
    const context = useContext(AppContext);
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
                {/* <p className="menu__welcome">Cześć {user.email}</p> */}
                <Link to="/oddaj-rzeczy" className="menu__link"><div className="menu__login">Oddaj rzeczy</div></Link>
                <Link to="/wylogowano" className="menu__link"><div className="menu__login" onClick={context.handleLogout}>Wyloguj</div></Link>
            </div>
            { mobileMenu ? 
                <ul className="menu__mobile-list">
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("start"); toggleMobileMenu()}}>Start</li>
                    </Link>
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("steps"); toggleMobileMenu()}}>O co chodzi?</li>
                    </Link>
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("about"); toggleMobileMenu()}}>O nas</li>
                    </Link>
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("help"); toggleMobileMenu()}}>Fundacja i organizacje</li>
                    </Link>
                    <Link to="/" className="menu__link">
                        <li className="menu__mobile-item" onClick={()=> {handleOnClickMenu("contact"); toggleMobileMenu()}}>Kontakt</li>
                    </Link>
                </ul> : null
            }
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