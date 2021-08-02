import Title from '../../components/title/Title';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__img"></div>
            <div className="contact__box">
                <Title text="Skontaktuj się z nami"></Title>
                <form className="contact__form">
                    <div className="contact__data">
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swoje imię</label>
                            <input className="contact__form-input"type="text" placeholder="Krzysztof"></input>
                        </div>
                        <div className="contact__input-wrapper">
                            <label className="contact__form-label">Wpisz swój email</label>
                            <input className="contact__form-input"type="mail" placeholder="abc@xyz.pl"></input>
                        </div>
                    </div>
                    <div className="contact__input-wrapper">
                        <label className="contact__form-label">Wpisz swoją wiadomość</label>
                        <textarea className="contact__form-input contact__form-input--msg" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
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