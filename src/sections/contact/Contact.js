import { useState } from 'react';
import Title from '../../components/title/Title';
import { API_URL } from '../../common/helpers';
import './Contact.scss';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameVal, setNameVal] = useState(true);
    const [emailVal, setEmailVal] = useState(true);
    const [messageVal, setMessageVal] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (name.includes(" ")) {
            setNameVal(false);
        } else {setNameVal(true)};
        if (!email.includes("@")) {
            setEmailVal(false);
        } else {setEmailVal(true)}
        if (message.length < 120) {
            setMessageVal(false);
        } else {setMessageVal(true)}
        if (nameVal === true && emailVal === true && messageVal === true) {
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
        }
    }

    return (
        <div className="contact">
            <div className="contact__img"></div>
            <div className="contact__box">
                <Title text="Skontaktuj się z nami"></Title>
                <form className="contact__form" onSubmit={handleFormSubmit}>
                    <div className="contact__data">
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swoje imię</label>
                            <input 
                                className="contact__form-input"
                                type="text" 
                                placeholder="Krzysztof"
                                onChange={(e)=> setName(e.target.value)}>
                            </input>
                            {nameVal ? <p></p> : <p className="contact__form-alert">Imię nie może zawierać pustych znaków</p>}
                        </div>
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swój email</label>
                            <input 
                                className="contact__form-input"
                                type="mail" 
                                placeholder="abc@xyz.pl"
                                onChange={(e)=> setEmail(e.target.value)}>
                            </input>
                            {emailVal ? <p></p> : <p className="contact__form-alert">Email musi zawierać znak '@'</p>}
                        </div>
                    </div>
                    <div className="contact__input-wrapper">
                        <label className="contact__form-label">Wpisz swoją wiadomość</label>
                        <textarea 
                            className="contact__form-input contact__form-input--msg" 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat."
                            onChange={(e)=> setMessage(e.target.value)}>
                        </textarea>
                        {messageVal ? <p></p> : <p className="contact__form-alert">Wiadomość za krótka (min. 120 znaków)</p>}
                    </div>
                    <button className="contact__form-button" type="submit">Wyślij</button>
                </form>
            </div>
            <p className="contact__copywright">Copyright by Coders Lab</p>
            <div className="contact__social-media">
                <div className="contact__facebook"></div>
                <div className="contact__instagram"></div>
            </div>
        </div>
    )
};

export default Contact;