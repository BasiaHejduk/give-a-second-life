import { Link } from 'react-router-dom';
import Title from '../../components/title/Title';
import Menu from '../../components/menu/Menu';
import './HomeStart.scss';
import MenuLoggedIn from '../../components/menu/MenuLoggedIn';

const HomeStart = ({handleLogout, user, email}) => {
    return (
        <div className="start" name="start">
            {user ? <MenuLoggedIn handleLogout={handleLogout} email={email}/> : <Menu/>}
            <div className="start__wrapper">
                <div className="start__img"></div>
                <div className="start__call-to-action">
                    <Title text={`Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce`}></Title>
                    <div className="start__buttons">
                        <Link to= {user ? "/oddaj-rzeczy" : "/logowanie"}>
                            <button className="start__button">ODDAJ <br/> RZECZY</button>
                        </Link>
                        <button className="start__button">ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeStart;