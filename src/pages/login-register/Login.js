import { useState } from 'react';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidate, setEmailValidate] = useState(true);
    const [passwordValidate, setPasswordValidate] = useState(true);

    return(
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Zaloguj się"/>
                <form className="login__form">
                    <div className="login__form-inputs">
                        <label className="login__label">Email</label>
                        <input 
                            value={email}
                            className={emailValidate ? "login__input" : "login__input login__input-alert"}
                            type="mail" 
                            onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                        {emailValidate ? <p></p> : <p className="login__form-alert">Podany email jest nieprawidłowy</p>}
                        <label className="login__label">Hasło</label>
                        <input 
                            value={password}
                            className={passwordValidate ? "login__input" : "login__input login__input-alert"}
                            type="text" 
                            onChange={(e)=> setPassword(e.target.value)}>
                        </input>
                        {passwordValidate ? <p></p> : <p className="login__form-alert">Podane hasło jest za krótkie</p>}
                    </div>
                    <div className="login__buttons">
                        <button className="login__button">Załóż konto</button>
                        <button type="submit" className="login__button">Zaloguj się</button>
                    </div>
                </form>

            </div>
        </div>
    )
};

export default Login;