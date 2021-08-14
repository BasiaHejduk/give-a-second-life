import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Logout = () => {
    return(
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Wylogowanie nastąpiło pomyślnie"/>
                <Link to="/"><button className="login__button">Strona główna</button></Link>
            </div>
        </div>
    )
};

export default Logout;