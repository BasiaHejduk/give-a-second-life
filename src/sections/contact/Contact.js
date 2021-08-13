import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import { API_URL } from '../../common/helpers';
import './Contact.scss';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValidate, setNameValidate] = useState(true);
    const [emailValidate, setEmailValidate] = useState(true);
    const [messageValidate, setMessageValidate] = useState(true);
    const [formValidate, setFormValidate] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    
    useEffect(() => {
        if ( !(name.includes(" ")) && email.includes("@") 
            && name.length > 0 && email.length > 0 && message.length >= 120) {
            setFormValidate(true);
        } else {setFormValidate(false)};
    },[name, email, message, nameValidate, emailValidate, messageValidate])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (name.includes(" ") || name.length === 0) {
            setNameValidate(false);
        } else {setNameValidate(true)};
        if (!email.includes("@")) {
            setEmailValidate(false);
        } else {setEmailValidate(true)}
        if (message.length < 20) {
            setMessageValidate(false);
        } else {setMessageValidate(true)}

        if (formValidate) {
            setSuccessMessage(true);
            const newContact = {
                name: name,
                email: email,
                message: message
            }
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newContact),
                headers: {
                  "Content-Type": "application/json"
                }
              })
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.log(error);
                });
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setSuccessMessage(false);
        }
    }

    return (
        <div className="contact" name="contact">
            <div className="contact__img"></div>
            <div className="contact__box">
                <Title text="Skontaktuj się z nami"></Title>
                {successMessage 
                    ? <p className="contact__success-msg">Wiadomość wysłana! <br/> Wkrótce się skontaktujemy.</p> 
                    : <p></p>}
                <form className="contact__form" onSubmit={handleFormSubmit}>
                    <div className="contact__data">
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swoje imię</label>
                            <input 
                                value={name}
                                className={nameValidate 
                                    ? "contact__form-input" 
                                    : "contact__form-input contact__input-alert"}
                                id="name"
                                type="text" 
                                placeholder="Krzysztof"
                                onChange={(e)=> setName(e.target.value)}>
                            </input>
                            {nameValidate 
                                ? <p></p> 
                                : <p className="contact__form-alert">Podane imię jest nieprawidłowe</p>}
                        </div>
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swój email</label>
                            <input 
                                value={email}
                                className={emailValidate 
                                    ? "contact__form-input" 
                                    : "contact__form-input contact__input-alert"}
                                id="email"
                                type="mail" 
                                placeholder="abc@xyz.pl"
                                onChange={(e)=> setEmail(e.target.value)}>
                            </input>
                            {emailValidate 
                                ? <p></p> 
                                : <p className="contact__form-alert">Podany email jest nieprawidłowy</p>}
                        </div>
                    </div>
                    <div className="contact__input-wrapper">
                        <label className="contact__form-label">Wpisz swoją wiadomość</label>
                        <textarea 
                            value={message}
                            className={messageValidate 
                                ? "contact__form-input contact__form-input--msg" 
                                : "contact__form-input contact__form-input--msg contact__input-alert"}
                            id="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat."
                            onChange={(e)=> setMessage(e.target.value)}>
                        </textarea>
                        {messageValidate 
                            ? <p></p> 
                            : <p className="contact__form-alert">Wiadomość musi mieć co najmniej 120 znaków</p>}
                    </div>
                    <button className="contact__form-button" type="submit">Wyślij</button>
                </form>
            </div>
            <p className="contact__copywright">Copyright by Coders Lab</p>
            <div className="contact__social-media">
                <div className="contact__facebook" />
                <div className="contact__instagram" />
            </div>
        </div>
    )
};

export default Contact;