import { useState } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step4 = ({update, updateStreetState, updateCityState, updatePostCodeState, updatePhoneState, 
                updateDateState, updateHourState, updateRemarksState}) => {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [remarks, setRemarks] = useState("");
    const [step4Validate, setStep4Validate] = useState(true);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }
    const nextStep = () => {
        if (street === "" || city === "" || postCode === "" || phone === "" 
            || date === "" || hour === "" || remarks === "") {
            setStep4Validate(false)
        } else {
            update(5);
            updateStreetState(street);
            updateCityState(city);
            updatePostCodeState(postCode);
            updatePhoneState(phone);
            updateDateState(date);
            updateHourState(hour);
            updateRemarksState(remarks);
        }
    };
    const previousStep = () => {update(3)};
    return (
    <>
        <YellowBar text={`Podaj adres oraz termin odbioru rzeczy.`}/>       
        <div className="form">
            <p className="form__step">Krok 4/4</p>
            <h3 className="form__headline">Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
            <form className="form__form" onSubmit={handleFormSubmit}>
                <div className="form__content-wrapper">
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Adres odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Ulica</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={street} onChange={(e)=> setStreet(e.target.value)}></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Miasto</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={city} onChange={(e)=> setCity(e.target.value)}></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Kod <br/> pocztowy</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={postCode} onChange={(e)=> setPostCode(e.target.value)}></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Numer <br/> telefonu</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Termin odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Data</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={date} onChange={(e)=> setDate(e.target.value)}></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Godzina</label>
                            <input className="form__input-text form__input-text--step4" type="text"
                                    value={hour} onChange={(e)=> setHour(e.target.value)}></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Uwagi <br/> dla kuriera</label>
                            <textarea className="form__input-text form__input-text--step4 form__input-text--textarea" 
                                        type="textarea" value={remarks} onChange={(e)=> setRemarks(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                {step4Validate ? <p></p> : <p className="form__alert">Uzupełnij wszystkie pola</p>}
                <div className="form__buttons-wrapper">
                    <button className="form__button" onClick={previousStep}>Wstecz</button>
                    <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                </div>
            </form>
        </div>
    </>
    )
};

export default Step4;