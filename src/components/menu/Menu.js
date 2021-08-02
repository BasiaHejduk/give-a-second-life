import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__login-list">
                <div className="menu__login">Zaloguj</div>
                <div className="menu__login">Załóż konto</div>
            </div>
            <ul className="menu__item-list">
                <li className="menu__item">Start</li>
                <li className="menu__item">O co chodzi?</li>
                <li className="menu__item">O nas</li>
                <li className="menu__item">Fundacja i organizacje</li>
                <li className="menu__item">Kontakt</li>
            </ul>
        </div>
    )
}

export default Menu;