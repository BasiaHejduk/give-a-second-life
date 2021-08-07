import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidate, setEmailValidate] = useState(true);
    const [passwordValidate, setPasswordValidate] = useState(true);
    const [formValidate, setFormValidate] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setEmailValidate(false);
        } else {setEmailValidate(true)}
        if (password.length < 6) {
            setPasswordValidate(false);
        } else {setPasswordValidate(true)}
        
        if (emailValidate && passwordValidate && email.length>0 && password.length>0) {
            setFormValidate(true);
        } else {setFormValidate(false)}
        if (formValidate) {
            setEmail("");
            setPassword("");
            console.log("Zalogowano")
        } else {console.log("Błędy w formularzu")};
    }

    return(
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Zaloguj się"/>
                <form className="login__form" onSubmit={handleFormSubmit}>
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
                        <Link to="/rejestracja"><button className="login__button">Załóż konto</button></Link>
                        <button type="submit" className="login__button">Zaloguj się</button>
                    </div>
                </form>

            </div>
        </div>
    )
};

export default Login;