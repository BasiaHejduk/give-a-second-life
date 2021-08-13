import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Register = ({email, setEmail, password, setPassword, handleSignUp, emailError, passwordError, user}) => {
    let history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
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
                <Title text="Załóż konto"/>
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
                        {/* <label className="login__label">Powtórz</label>
                        <input 
                            value={password}
                            className="login__input"
                            type="password" 
                            required
                            onChange={(e)=> setPassword(e.target.value)}>
                        </input>
                        <p className="login__form-alert">{passwordError}</p> */}
                    </div>
                    <div className="login__buttons">
                        <Link to="/logowanie"><button className="login__button">Zaloguj się</button></Link>
                        <button type="submit" className="login__button">Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;