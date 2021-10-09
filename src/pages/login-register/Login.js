import { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../App';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Login = () => {
    const context = useContext(AppContext);
    let history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        context.handleLogin();
    }

    useEffect(() => {
        if (context.user) {
            history.push("/oddaj-rzeczy")
        }
    }, [context.user, history]);

    return (
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Zaloguj się"/>
                <form className="login__form" onSubmit={handleFormSubmit}>
                    <div className="login__form-inputs">
                        <label className="login__label">Email</label>
                        <input 
                            value={context.email}
                            className="login__input"
                            type="mail" 
                            required
                            onChange={(e)=> context.setEmail(e.target.value)}>
                        </input>
                        <label className="login__label">Hasło</label>
                        <input 
                            value={context.password}
                            className="login__input"
                            type="password" 
                            required
                            onChange={(e)=> context.setPassword(e.target.value)}>
                        </input>
                        {context.authError ? <p className="login__form-alert">Błędny email lub hasło</p> : <p></p>}
                    </div>
                    <div className="login__buttons">
                        <Link to="/rejestracja"><button className="login__button">Załóż konto</button></Link>
                        <button type="submit" className="login__button">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;