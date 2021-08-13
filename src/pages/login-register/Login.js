import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Login = ({email, setEmail, password, setPassword, handleLogin, emailError, passwordError, user}) => {
    let history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    useEffect(() => {
        if (user) {
            history.push("/oddaj-rzeczy")
        }
    }, [user]);

    return (
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Zaloguj się"/>
                <form className="login__form" onSubmit={handleFormSubmit}>
                    <div className="login__form-inputs">
                        <label className="login__label">Email</label>
                        <input 
                            value={email}
                            className="login__input"
                            type="mail" 
                            required
                            onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                        <p className="login__form-alert">{emailError}</p>
                        <label className="login__label">Hasło</label>
                        <input 
                            value={password}
                            className="login__input"
                            type="password" 
                            required
                            onChange={(e)=> setPassword(e.target.value)}>
                        </input>
                        <p className="login__form-alert">{passwordError}</p>
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