import { useState } from 'react';
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");
        if (name.includes(" ") || name.length === 0) {
            setNameValidate(false);
            nameInput.classList.add("contact__input-alert");
        } else {
            setNameValidate(true);
            nameInput.classList.remove("contact__input-alert");
        };
        if (!email.includes("@")) {
            setEmailValidate(false);
            emailInput.classList.add("contact__input-alert");
        } else {
            setEmailValidate(true);
            emailInput.classList.remove("contact__input-alert");
        }
        if (message.length < 120) {
            setMessageValidate(false);
            messageInput.classList.add("contact__input-alert");
        } else {
            setMessageValidate(true);
            messageInput.classList.remove("contact__input-alert");
        }
        if (nameValidate === true && emailValidate === true && messageValidate === true 
            && nameInput.value.length > 0 && emailInput.value.length > 0 && messageInput.value.length > 0) {
            console.log("Formularz wysłany");
            setFormValidate(true);
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
            document.querySelector("form").reset();
        } else {
            console.log("Formularz odrzucony");
            setFormValidate(false);
        }
    }

    return (
        <div className="contact" name="contact">
            <div className="contact__img"></div>
            <div className="contact__box">
                <Title text="Skontaktuj się z nami"></Title>
                {formValidate ? <p className="contact__success-msg">Wiadomość wysłana! <br/> Wkrótce się skontaktujemy.</p> : <p></p>}
                <form className="contact__form" onSubmit={handleFormSubmit}>
                    <div className="contact__data">
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swoje imię</label>
                            <input 
                                className="contact__form-input"
                                id="name"
                                type="text" 
                                placeholder="Krzysztof"
                                onChange={(e)=> setName(e.target.value)}>
                            </input>
                            {nameValidate ? <p></p> : <p className="contact__form-alert">Podane imię jest nieprawidłowe</p>}
                        </div>
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swój email</label>
                            <input 
                                className="contact__form-input"
                                id="email"
                                type="mail" 
                                placeholder="abc@xyz.pl"
                                onChange={(e)=> setEmail(e.target.value)}>
                            </input>
                            {emailValidate ? <p></p> : <p className="contact__form-alert">Podany email jest nieprawidłowy</p>}
                        </div>
                    </div>
                    <div className="contact__input-wrapper">
                        <label className="contact__form-label">Wpisz swoją wiadomość</label>
                        <textarea 
                            className="contact__form-input contact__form-input--msg"
                            id="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat."
                            onChange={(e)=> setMessage(e.target.value)}>
                        </textarea>
                        {messageValidate ? <p></p> : <p className="contact__form-alert">Wiadomość musi mieć co najmniej 120 znaków</p>}
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