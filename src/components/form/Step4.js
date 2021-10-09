import { useState, useContext } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import { FormContext } from "./Form";
import './Form.scss';

const Step4 = () => {
    const context = useContext(FormContext);
    const [street, setStreet] = useState(context.streetState);
    const [city, setCity] = useState(context.cityState);
    const [postCode, setPostCode] = useState(context.postCodeState);
    const [phone, setPhone] = useState(context.phoneState);
    const [date, setDate] = useState(context.dateState);
    const [hour, setHour] = useState(context.hourState);
    const [remarks, setRemarks] = useState(context.remarksState);
    const [step4Validate, setStep4Validate] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const nextStep = () => {
        if (street === "" || city === "" || postCode === "" || phone === "" 
            || date === "" || hour === "" || remarks === "") {
            setStep4Validate(false)
        } else {
            context.updateStep(5);
            context.updateStreetState(street);
            context.updateCityState(city);
            context.updatePostCodeState(postCode);
            context.updatePhoneState(phone);
            context.updateDateState(date);
            context.updateHourState(hour);
            context.updateRemarksState(remarks);
        }
    };
    const previousStep = () => {context.updateStep(3)};
    
    return (
    <>
        <YellowBar text={`Podaj adres oraz termin odbioru rzeczy.`}/>       
        <div className="form form--step4">
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