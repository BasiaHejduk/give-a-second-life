import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step3 = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }

    const nextStep = () => {
        console.log("Następny krok")
    }

    const previousStep = () => {
        console.log("Wstecz");
    }

    return (
        <>
            <YellowBar text={`Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
                w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.`}/>       
            <div className="form">
                <p className="form__step">Krok 3/4</p>
                <h3 className="form__headline">Lokalizacja:</h3>
                <form className="form__form" onSubmit={handleFormSubmit}>
                    <div className="form__content">
                            <select className="form__select" name="localization">
                                <option className="form__option" value="">--wybierz--</option>
                                <option className="form__option" value="1">Poznań</option>
                                <option className="form__option" value="2">Warszawa</option>
                                <option className="form__option" value="3">Kraków</option>
                                <option className="form__option" value="4">Wrocław</option>
                                <option className="form__option" value="5">Katowice</option>
                            </select>
                            <p className="form__tagline">Komu chcesz pomóc?</p>
                            <div className="form__checkbox-wrapper">
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"></input>
                                    <label className="form__label form__label--checkbox">dzieciom</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"></input>
                                    <label className="form__label form__label--checkbox">samotnym matkom</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"></input>
                                    <label className="form__label form__label--checkbox">bezdomnym</label>
                                </div>
                            </div>
                            <div className="form__checkbox-wrapper form__input-wrapper--step3">
                                <div className="form__input-wrapper">
                                    <input className="form__checkbox" type="checkbox" name="help-type"></input>
                                    <label className="form__label form__label--checkbox">niepełnosprawnym</label>
                                </div>
                                <div className="form__input-wrapper form__input-wrapper--step3">
                                    <input className="form__checkbox" type="checkbox" name="help-type"></input>
                                    <label className="form__label form__label--checkbox">osobom starszym</label>
                                </div>
                            </div>
                            <p className="form__tagline">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                            <input className="form__input-text" type="text"></input>
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

export default Step3;