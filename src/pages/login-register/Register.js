import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title';
import './Login.scss';

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [emailValidate, setEmailValidate] = useState(true);
    const [firstPasswordValidate, setFirstPasswordValidate] = useState(true);
    const [secondPasswordValidate, setSecondPasswordValidate] = useState(true);
    const [formValidate, setFormValidate] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setEmailValidate(false);
        } else {setEmailValidate(true)}
        if (firstPassword.length < 6) {
            setFirstPasswordValidate(false);
        } else {setFirstPasswordValidate(true)}
        if (secondPassword === firstPassword && secondPassword.length>=6) {
            setSecondPasswordValidate(true);
        } else {setSecondPasswordValidate(false)}
        
        if (emailValidate && firstPasswordValidate && secondPasswordValidate && email.length>0 && firstPassword.length>0 && secondPassword.length>0) {
            setFormValidate(true);
        } else {setFormValidate(false)}
        if (formValidate) {
            setEmail("");
            setFirstPassword("");
            setSecondPassword("");
            console.log("Zalogowano")
        } else {console.log("Błędy w formularzu")};

        console.log(formValidate);
    }

    return(
        <div className="login">
            <Menu></Menu>
            <div className="login__wrapper">
                <Title text="Załóż konto"/>
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
                            value={firstPassword}
                            className={firstPasswordValidate ? "login__input" : "login__input login__input-alert"}
                            type="text" 
                            onChange={(e)=> setFirstPassword(e.target.value)}>
                        </input>
                        {secondPasswordValidate ? <p></p> : <p className="login__form-alert">Podane hasło jest za krótkie</p>}
                        <label className="login__label">Powtórz hasło</label>
                        <input 
                            value={secondPassword}
                            className={secondPasswordValidate ? "login__input" : "login__input login__input-alert"}
                            type="text" 
                            onChange={(e)=> setSecondPassword(e.target.value)}>
                        </input>
                        {secondPasswordValidate ? <p></p> : <p className="login__form-alert">Podane hasło nieprawidłowe</p>}
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