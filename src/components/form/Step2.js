import { useState } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step2 = ({update, updateBagsState}) => {
    const [bagsNumber, setBagsNumber] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }

    const nextStep = () => {
        update(3);
        updateBagsState(bagsNumber);
    };
    const previousStep = () => {update(1)};

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