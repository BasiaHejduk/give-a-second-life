import { useState } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step3 = ({updateStep, updateLocalizationState, updateToWhoState, updateOrganizationState, localizationState, toWhoState}) => {
    const [localization, setLocalization] = useState(localizationState);
    const [toWho, setToWho] = useState(toWhoState);
    const [organization, setOrganization] = useState("");
    const [step3Validate, setStep3Validate] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const nextStep = () => {
        if (localization === "" || toWho === "") {
            setStep3Validate(false)
        } else {
            updateStep(4);
            updateLocalizationState(localization);
            updateToWhoState(toWho);
            updateOrganizationState(organization);
        }
    };
    const previousStep = () => {updateStep(2)};
    
    return (
        <>
            <YellowBar text={`Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
                w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.`}/>       
            <div className="form">
                <p className="form__step">Krok 3/4</p>
                <h3 className="form__headline">Lokalizacja:</h3>
                <form className="form__form" onSubmit={handleFormSubmit}>
                    <div className="form__content">
                            <select className="form__select" name="localization"
                                    value={localization} onChange={(e)=> setLocalization(e.target.value)}>
                                <option className="form__option" value="">--wybierz--</option>
                                <option className="form__option" value="Poznań">Poznań</option>
                                <option className="form__option" value="Warszawa">Warszawa</option>
                                <option className="form__option" value="Kraków">Kraków</option>
                                <option className="form__option" value="Wrocław">Wrocław</option>
                                <option className="form__option" value="Katowice">Katowice</option>
                            </select>
                            <p className="form__tagline">Komu chcesz pomóc?</p>
                            <div className="form__checkbox-wrapper">
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"
                                            value="dzieciom" onChange={(e)=> setToWho(e.target.value)}
                                            checked={toWho === "dzieciom"}
                                    ></input>
                                    <label className="form__label form__label--checkbox">dzieciom</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"
                                            value="samotnym matkom" onChange={(e)=> setToWho(e.target.value)}
                                            checked={toWho === "samotnym matkom"}
                                    ></input>
                                    <label className="form__label form__label--checkbox">samotnym matkom</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"
                                            value="bezdomnym" onChange={(e)=> setToWho(e.target.value)}
                                            checked={toWho === "bezdomnym"}
                                    ></input>
                                    <label className="form__label form__label--checkbox">bezdomnym</label>
                                </div>
                            </div>
                            <div className="form__checkbox-wrapper">
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"
                                            value="niepełnosprawnym" onChange={(e)=> setToWho(e.target.value)}
                                            checked={toWho === "niepełnosprawnym"}
                                    ></input>
                                    <label className="form__label form__label--checkbox">niepełnosprawnym</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"
                                            value="osobom starszym" onChange={(e)=> setToWho(e.target.value)}
                                            checked={toWho === "osobom starszym"}
                                    ></input>
                                    <label className="form__label form__label--checkbox">osobom starszym</label>
                                </div>
                            </div>
                            <p className="form__tagline">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                            <input className="form__input-text" type="text" 
                                   value={organization} onChange={(e)=> setOrganization(e.target.value)}></input>
                    </div>
                    {step3Validate ? <p></p> : <p className="form__alert">Wybierz lokalizację i komu chcesz pomóc</p>}
                    <div className="form__buttons-wrapper">
                        <button className="form__button" onClick={previousStep}>Wstecz</button>
                        <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Step3;