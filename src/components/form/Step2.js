import { useState, useContext } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import { FormContext } from "./Form";
import './Form.scss';

const Step2 = () => {
    const context = useContext(FormContext);
    const [bagsNumber, setBagsNumber] = useState(context.bagsState);
    const [step2Validate, setStep2Validate] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const nextStep = () => {
        if (bagsNumber === "") {
            setStep2Validate(false);
        } else {
            context.updateStep(3);
            context.updateBagsState(bagsNumber);
        }
    };
    const previousStep = () => {context.updateStep(1)};
    
    return (
        <>
            <YellowBar text={`Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                instrukcję jak poprawnie spakować rzeczt znajdziesz TUTAJ`}/>       
            <div className="form">
                <p className="form__step">Krok 2/4</p>
                <h3 className="form__headline">Podaj liczbę 60l worków, w które spakowałaś/eś rzeczy:</h3>
                <form className="form__form" onSubmit={handleFormSubmit}>
                    <div className="form__content">
                        <div className="form__input-wrapper">
                            <label className="form__label">60l worków:</label>
                            <select className="form__select form__select--bags" name="bags" 
                                    value={bagsNumber} onChange={(e) => setBagsNumber(e.target.value)}>
                                <option className="form__option" value="">--wybierz--</option>
                                <option className="form__option" value="1">1</option>
                                <option className="form__option" value="2">2</option>
                                <option className="form__option" value="3">3</option>
                                <option className="form__option" value="4">4</option>
                                <option className="form__option" value="5">5</option>
                            </select>
                        </div>
                    </div>
                    {step2Validate ? <p></p> : <p className="form__alert">Wybierz ile worków masz do oddania</p>}
                    <div className="form__buttons-wrapper">
                        <button className="form__button" onClick={previousStep}>Wstecz</button>
                        <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Step2;